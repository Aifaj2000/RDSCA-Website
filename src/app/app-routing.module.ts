import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutInstitutionComponent } from './pages/about/about-institution/about-institution.component';
import { ChairmanMessageComponent } from './pages/about/chairman-message/chairman-message.component';
import { MissionComponent } from './pages/about/mission/mission.component';
import { OrganogramOfInstitutionComponent } from './pages/about/organogram-of-institution/organogram-of-institution.component';
import { PrincipalMessageComponent } from './pages/about/principal-message/principal-message.component';
import { VissionComponent } from './pages/about/vission/vission.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { CodeOfConductComponent } from './pages/administration/code-of-conduct/code-of-conduct.component';
import { CommitteesComponent } from './pages/administration/committees/committees.component';
import { CoreValuesComponent } from './pages/administration/core-values/core-values.component';
import { ManagementBodyComponent } from './pages/administration/management-body/management-body.component';
import { AcademicCalenderComponent } from './pages/admission/academic-calender/academic-calender.component';
import { AdmissionComponent } from './pages/admission/admission.component';
import { CoursesOutcomeComponent } from './pages/admission/courses-outcome/courses-outcome.component';
import { CoursesComponent } from './pages/admission/courses/courses.component';
import { ResultsComponent } from './pages/admission/results/results.component';
import { AluminiApplicationFormComponent } from './pages/alumini/alumini-application-form/alumini-application-form.component';
import { AluminiReportComponent } from './pages/alumini/alumini-report/alumini-report.component';
import { AluminiComponent } from './pages/alumini/alumini.component';
import { GovernigBodyComponent } from './pages/alumini/governig-body/governig-body.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EventsComponent } from './pages/events/events.component';
import { BestPracticesComponent } from './pages/facilities/best-practices/best-practices.component';
import { CareerCounselingComponent } from './pages/facilities/career-counseling/career-counseling.component';
import { DivyanganComponent } from './pages/facilities/divyangan/divyangan.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { IctComponent } from './pages/facilities/ict/ict.component';
import { LibraryComponent } from './pages/facilities/library/library.component';
import { PhysicalEducationComponent } from './pages/facilities/physical-education/physical-education.component';
import { PhysicalFacilityComponent } from './pages/facilities/physical-facility/physical-facility.component';
import { PlacementCellComponent } from './pages/facilities/placement-cell/placement-cell.component';
import { FacultyComponent } from './pages/faculty/faculty.component';
import { NonTeachingStaffComponent } from './pages/faculty/non-teaching-staff/non-teaching-staff.component';
import { TeachingResearchCornerComponent } from './pages/faculty/teaching-research-corner/teaching-research-corner.component';
import { TeachingStaffComponent } from './pages/faculty/teaching-staff/teaching-staff.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { GallaryComponent } from './pages/gallary/gallary.component';
import { AisheCertificateComponent } from './pages/naac/aishe-certificate/aishe-certificate.component';
import { AnnualReportComponent } from './pages/naac/annual-report/annual-report.component';
import { IqacComponent } from './pages/naac/iqac/iqac.component';
import { NaacComponent } from './pages/naac/naac.component';
import { SsrComponent } from './pages/naac/ssr/ssr.component';
import { SssComponent } from './pages/naac/sss/sss.component';
import { NoticeComponent } from './pages/notice/notice.component';
import { NssComponent } from './pages/nss/nss.component';
import { QuestionPaperComponent } from './pages/question-paper/question-paper.component';
import { BridgeCoursesComponent } from './pages/students-corner/bridge-courses/bridge-courses.component';
import { MentorMenteesSchemeComponent } from './pages/students-corner/mentor-mentees-scheme/mentor-mentees-scheme.component';
import { RemedialCoachingComponent } from './pages/students-corner/remedial-coaching/remedial-coaching.component';
import { ScholarshipComponent } from './pages/students-corner/scholarship/scholarship.component';
import { StudentsCornerComponent } from './pages/students-corner/students-corner.component';
import { StudentsWelfareFundComponent } from './pages/students-corner/students-welfare-fund/students-welfare-fund.component';
import { SyllabusComponent } from './pages/syllabus/syllabus.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'team',
    loadChildren: () => import('./pages/team/team.module').then(m => m.TeamModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  // {
  //   path: 'faculty',
  //   loadChildren: () => import('./pages/faculty/faculty.module').then(m => m.FacultyModule)
  // },
  

    // { path: 'about-institution', component: AboutInstitutionComponent },
     { path: 'about-us/vission', component: VissionComponent },
    { path: 'about-us/principle-message', component: PrincipalMessageComponent },
     { path: 'about-us/chairman-message', component: ChairmanMessageComponent },
    // { path: 'about-us/organogram-of-institution', component: OrganogramOfInstitutionComponent },
    // {path: 'administration/committees', component:CommitteesComponent},
    // {path: 'administration', component:AdministrationComponent},
    // {path: 'administration/management-body', component:ManagementBodyComponent},
    // {path: 'administration/code-of-conduct', component:CodeOfConductComponent},
    // {path: 'administration/core-value', component:CoreValuesComponent},
    // {path: 'admission', component:AdmissionComponent},
    // {path: 'admission/course-outcome', component:CoursesOutcomeComponent},
     {path: 'admission/courses', component:CoursesComponent},
    // {path: 'admission/results', component:ResultsComponent},
    // {path: 'admission/academic-calender', component:AcademicCalenderComponent},
     {path: 'contact', component:ContactComponent},
    // {path: 'facilities', component:FacilitiesComponent},
    // { path: 'facilities/library', component: LibraryComponent },
    // { path: 'facilities/physical-facility', component: PhysicalFacilityComponent },
    // { path: 'facilities/best-practices', component: BestPracticesComponent },
    // { path: 'facilities/divyangan', component: DivyanganComponent },
    // { path: 'facilities/physical-education', component: PhysicalEducationComponent },
    // { path: 'facilities/nss', component: NssComponent },
    // { path: 'facilities/career-counseling', component: CareerCounselingComponent },
    // { path: 'facilities/ict', component: IctComponent },
    // { path: 'facilities/placement-cell', component: PlacementCellComponent },
    // { path: 'students-corner', component: StudentsCornerComponent },
    // { path: 'students-corner/bridge-courses', component: BridgeCoursesComponent },
    // { path: 'students-corner/mentor-mentees-scheme', component: MentorMenteesSchemeComponent },
    // { path: 'students-corner/remedial-coaching', component: RemedialCoachingComponent },
    // { path: 'students-corner/scholarship', component: ScholarshipComponent },
    // { path: 'students-corner/students-welfare-fund', component: StudentsWelfareFundComponent },
    // {path: 'alumini', component:AluminiComponent},
    // {path: 'allumnini/governing-body', component:GovernigBodyComponent},
    // {path: 'allumnini/alumini-application-form', component:AluminiApplicationFormComponent},
    // {path: 'allumnini/alumini-report', component:AluminiReportComponent},
    // {path: 'faculty', component:FacultyComponent},
     {path: 'faculty/teaching-staff', component:TeachingStaffComponent},
     {path: 'faculty/non-teaching-staff', component:NonTeachingStaffComponent},
    // {path: 'faculty/teaching-research-corner', component:TeachingResearchCornerComponent},
    // {path: 'gallary', component:GallaryComponent},
    // {path: 'naac', component:NaacComponent},
    // { path: 'naac/ssr', component: SsrComponent },
    // { path: 'naac/sss', component: SssComponent },
    // { path: 'naac/annual-report', component: AnnualReportComponent },
    // { path: 'naac/iqac', component: IqacComponent },
    // { path: 'naac/iqar', component: IqacComponent },
    // { path: 'naac/aishe-certificate', component: AisheCertificateComponent },
    // { path: 'event', component:  EventsComponent },
    // { path: 'notice', component:  NoticeComponent },
    // { path: 'feedback', component:  FeedbackComponent },
  
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
