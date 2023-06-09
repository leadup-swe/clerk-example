import { moveTask } from './move-task';
import { createTask } from './create-task';
import { getProject } from './get-project';
import { enrolledProjects } from './enrolled-projects';
import { createColumn } from './create-column';
import { updateProject } from './update-project';
import { addCollaborators } from './add-collaborators';
import { removeCollaborator } from './remove-collaborator';
import { addCollaborator } from './add-collaborator';
import { createProject } from './create-project';
import { trpcServer } from '@api/core/trpc-server';

export const projects = trpcServer.router({
  createProject,
  updateProject,
  addCollaborator,
  removeCollaborator,
  addCollaborators,
  createColumn,
  enrolledProjects,
  getProject,
  createTask,
  moveTask,
});
