#!/usr/bin/env node
import { execSync } from 'child_process';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Clawpack Skill CLI');
  console.log('Usage: clawpack-skill <command>');
  console.log('');
  console.log('Commands:');
  console.log('  pack      - Pack OpenClaw configuration');
  console.log('  unpack    - Unpack configuration');
  console.log('  backup    - Backup to GitHub');
  console.log('  restore   - Restore from GitHub');
  console.log('  status    - Check status');
  process.exit(0);
}

const command = args[0];

try {
  switch (command) {
    case 'pack':
      execSync('clawpack pack', { stdio: 'inherit' });
      break;
    case 'unpack':
      execSync(`clawpack unpack ${args[1] || ''}`, { stdio: 'inherit' });
      break;
    case 'backup':
      execSync('clawpack backup', { stdio: 'inherit' });
      break;
    case 'restore':
      execSync(`clawpack restore ${args[1] || ''}`, { stdio: 'inherit' });
      break;
    case 'status':
      execSync('clawpack status', { stdio: 'inherit' });
      break;
    default:
      console.error(`Unknown command: ${command}`);
      process.exit(1);
  }
} catch (error) {
  process.exit(1);
}
