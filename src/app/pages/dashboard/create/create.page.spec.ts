import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms'
import { CreatePage } from './create.page';
import { RouterTestingModule } from '@angular/router/testing';
describe('CreatePage', () => {
  let component: CreatePage;
  let fixture: ComponentFixture<CreatePage>;
  let formBulder: FormBuilder;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [

      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    formBulder = TestBed.inject(FormBuilder);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
