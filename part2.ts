// EA2 Lec - Part 2 (TypeScript Playground)
// Author: Matthew Staana
// Paste this whole file into https://www.typescriptlang.org/play and press Run.

// 1. Interface OnInit: one property "ngOnInit", a function with no params returning void.
interface OnInit {
  ngOnInit(): void;
}

// 2. Decorator factory "Component": takes { selector, template } and returns the decorator.
function Component(config: { selector: string; template: string }) {
  // The returned function is the actual decorator. TypeScript runs it when the
  // class is defined and passes the class itself as "target".
  return function (target: Function) {
    console.log(
      "The class is represented by selector '" +
        config.selector +
        "' and has template of '" +
        config.template +
        "'."
    );
  };
}

// 3. Class named after my last name. Decorator attached + implements OnInit.
@Component({
  selector: "app-staana",
  template: "<h1>Hello from Staana</h1>",
})
class Staana implements OnInit {
  ngOnInit(): void {
    console.log("The component Staana is initiated");
  }
}

// 4. Create an instance of the class.
const staana = new Staana();

// 5. Call the ngOnInit method.
staana.ngOnInit();
