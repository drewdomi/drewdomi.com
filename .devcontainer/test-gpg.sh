#!/bin/bash

echo "=== GPG Configuration Test ==="
echo

# Test 1: Check if GPG directory exists and has correct permissions
echo "1. Checking GPG directory..."
if [ -d "/home/node/.gnupg" ]; then
    echo "✓ GPG directory exists"
    echo "Directory permissions: $(ls -ld /home/node/.gnupg | cut -d' ' -f1)"
else
    echo "✗ GPG directory not found"
    exit 1
fi

# Test 2: Check if GPG keys are available
echo
echo "2. Checking GPG keys..."
echo "Public keys:"
gpg --list-keys 2>/dev/null || echo "No public keys found"

echo
echo "Secret keys:"
gpg --list-secret-keys 2>/dev/null || echo "No secret keys found"

# Test 3: Check if the specific key is available
echo
echo "3. Checking for specific key (79FA41EE531F8A35)..."
if gpg --list-secret-keys 79FA41EE531F8A35 &>/dev/null; then
    echo "✓ Key 79FA41EE531F8A35 found"
else
    echo "✗ Key 79FA41EE531F8A35 not found"
fi

# Test 4: Check Git configuration
echo
echo "4. Checking Git GPG configuration..."
echo "Git commit signing: $(git config --global commit.gpgsign)"
echo "Git signing key: $(git config --global user.signingkey)"

# Test 5: Check environment variables
echo
echo "5. Checking environment variables..."
echo "GPG_TTY: $GPG_TTY"

# Test 6: Test GPG agent
echo
echo "6. Testing GPG agent..."
gpg-connect-agent 'getinfo version' /bye 2>/dev/null && echo "✓ GPG agent is running" || echo "✗ GPG agent not running"

echo
echo "=== Test Complete ==="