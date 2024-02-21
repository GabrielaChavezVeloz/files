import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { LoginComponent } from "./login.component";
import { AppModule } from "src/app/app.module";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";


describe('LoginComponent', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let el: DebugElement;

    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({
            imports: [AppModule]
        })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(LoginComponent);
                component = fixture.componentInstance;
                el = fixture.debugElement;
            });
    }));

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });

    it("shoul contain email field", () => {
        const field = el.queryAll(By.css(".mdc-text-field"));
        expect(field).toBeTruthy("Could not find cards");
        expect(field.length).toBe(2, "Unexpected number of courses");
    });
});