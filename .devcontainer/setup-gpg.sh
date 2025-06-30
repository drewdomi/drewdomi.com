#!/bin/bash

# Setup GPG configuration for dev container
echo "Setting up GPG configuration..."

# Ensure the .gnupg directory exists and has correct permissions
if [ -d "/home/node/.gnupg" ]; then
    echo "GPG directory found, setting permissions..."
    sudo chown -R node:node /home/node/.gnupg
    chmod 700 /home/node/.gnupg
    
    # Set permissions for GPG files
    if [ -f "/home/node/.gnupg/gpg.conf" ]; then
        chmod 600 /home/node/.gnupg/gpg.conf
    fi
    
    if [ -f "/home/node/.gnupg/gpg-agent.conf" ]; then
        chmod 600 /home/node/.gnupg/gpg-agent.conf
    fi
    
    # Set permissions for key files
    find /home/node/.gnupg -type f -name "*.gpg" -exec chmod 600 {} \; 2>/dev/null || true
    find /home/node/.gnupg -type f -name "*.kbx" -exec chmod 600 {} \; 2>/dev/null || true
    
    echo "GPG permissions set successfully"
else
    echo "Warning: GPG directory not found. Make sure to mount your host .gnupg directory."
fi

# Configure GPG agent for container environment
if [ ! -f "/home/node/.gnupg/gpg-agent.conf" ]; then
    echo "Creating GPG agent configuration..."
    cat > /home/node/.gnupg/gpg-agent.conf << EOF
pinentry-program /usr/bin/pinentry-curses
default-cache-ttl 86400
max-cache-ttl 86400
allow-preset-passphrase
EOF
    chmod 600 /home/node/.gnupg/gpg-agent.conf
fi

# Set GPG_TTY environment variable
export GPG_TTY=$(tty)
echo 'export GPG_TTY=$(tty)' >> /home/node/.bashrc
echo 'export GPG_TTY=$(tty)' >> /home/node/.zshrc 2>/dev/null || true

# Configure git to enable commit signing
git config --global commit.gpgsign true
git config --global user.signingkey "79FA41EE531F8A35"

# Restart GPG agent
gpgconf --kill gpg-agent

echo "GPG setup completed!"

# Test GPG functionality
echo "Testing GPG setup..."
gpg --list-keys
gpg --list-secret-keys

echo "GPG configuration script finished."