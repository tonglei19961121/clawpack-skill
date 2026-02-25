import { execSync } from 'child_process';

export interface ToolResult {
  success: boolean;
  output: string;
  error?: string;
}

function runClawpackCommand(args: string): ToolResult {
  try {
    const output = execSync(`clawpack ${args}`, { 
      encoding: 'utf-8',
      stdio: ['pipe', 'pipe', 'pipe']
    });
    return { success: true, output: output.trim() };
  } catch (error: any) {
    return { 
      success: false, 
      output: '', 
      error: error.stderr?.toString() || error.message 
    };
  }
}

// Tool functions for OpenClaw
export function clawpack_pack(outputPath?: string): ToolResult {
  return runClawpackCommand(`pack ${outputPath || ''}`);
}

export function clawpack_unpack(filePath: string): ToolResult {
  return runClawpackCommand(`unpack ${filePath}`);
}

export function clawpack_backup(options?: { full?: boolean; profile?: string }): ToolResult {
  const args = ['backup'];
  if (options?.full) args.push('--full');
  if (options?.profile) args.push(`--profile ${options.profile}`);
  return runClawpackCommand(args.join(' '));
}

export function clawpack_restore(source?: string): ToolResult {
  return runClawpackCommand(`restore ${source || ''}`);
}

export function clawpack_status(): ToolResult {
  return runClawpackCommand('status');
}

export function clawpack_list(): ToolResult {
  return runClawpackCommand('list');
}

export function clawpack_profileList(): ToolResult {
  return runClawpackCommand('profile list');
}

export function clawpack_profileAdd(name: string, gistId: string, description?: string): ToolResult {
  const args = ['profile add', name, gistId];
  if (description) args.push(description);
  return runClawpackCommand(args.join(' '));
}

export function clawpack_profileUse(name: string): ToolResult {
  return runClawpackCommand(`profile use ${name}`);
}

export function clawpack_profileRemove(name: string): ToolResult {
  return runClawpackCommand(`profile remove ${name}`);
}
