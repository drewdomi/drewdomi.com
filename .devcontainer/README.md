# GPG Configuration for Development Container

This development container is configured to enable GPG signing for Git commits. The configuration automatically mounts your host's GPG directory and sets up the necessary permissions and configurations.

## Features

- **Host GPG Directory Mounting**: Your host's `~/.gnupg` directory is mounted into the container
- **Automatic Permission Setup**: Proper file permissions are set for GPG files
- **GPG Agent Configuration**: GPG agent is configured to work in the container environment
- **Git Signing Configuration**: Git is automatically configured for commit signing
- **VS Code Integration**: VS Code is configured to enable commit signing

## Requirements

Before using this development container, ensure:

1. You have GPG keys set up on your host system
2. Your GPG key `79FA41EE531F8A35` is available in your host's keychain
3. Your host's `~/.gnupg` directory contains your GPG keys

## Testing the Setup

After the container is built and started, you can test the GPG configuration:

```bash
# Run the test script
./.devcontainer/test-gpg.sh

# Or test manually
gpg --list-keys
gpg --list-secret-keys
git config --global commit.gpgsign
```

## Manual Configuration

If you need to reconfigure GPG settings, you can run:

```bash
./.devcontainer/setup-gpg.sh
```

## Troubleshooting

### GPG Directory Not Found
If you see "GPG directory not found", ensure:
- Your host has a `~/.gnupg` directory
- Docker/Podman has permission to access your home directory

### Permission Errors
If you encounter permission errors:
- The setup script should automatically fix permissions
- You can manually run: `sudo chown -R node:node /home/node/.gnupg && chmod 700 /home/node/.gnupg`

### GPG Agent Issues
If the GPG agent isn't working:
- Try restarting it: `gpgconf --kill gpg-agent`
- Check the configuration in `/home/node/.gnupg/gpg-agent.conf`

## Files

- `.devcontainer/devcontainer.json` - Main container configuration
- `.devcontainer/setup-gpg.sh` - GPG setup script
- `.devcontainer/test-gpg.sh` - GPG configuration test script