import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work.component';
import { MarketplaceStudioComponent } from './components/impartner/marketplace-studio/marketplace-studio.component';
import { CompetenciesComponent } from './components/impartner/competencies/competencies.component';
import { BusinessPlanningComponent } from './components/impartner/business-planning/business-planning.component';
import { PcmComponent } from './components/impartner/pcm/pcm.component';
import { MdfComponent } from './components/impartner/mdf/mdf.component';
import { DesignSystemComponent } from './components/impartner/design-system/design-system.component';

const routes: Routes = [
  { path: '', component: WorkComponent },
  { path: 'impartner-marketplace', component: MarketplaceStudioComponent },
  { path: 'competency-management', component: CompetenciesComponent },
  { path: 'business-planning', component: BusinessPlanningComponent },
  { path: 'program-compliance-manager', component: PcmComponent },
  { path: 'marketing-development-funds', component: MdfComponent },
  { path: 'program-compliance-manager', component: PcmComponent },
  { path: 'design-system', component: DesignSystemComponent },
];

export const WorkRoutingModule: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
