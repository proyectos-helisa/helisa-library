import { Pipe } from '@angular/core';
export class ExternalLinkPipe {
    transform(value, ...args) {
        return '//' + value;
    }
}
ExternalLinkPipe.decorators = [
    { type: Pipe, args: [{
                name: 'externalLink'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtbGluay5waXBlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2hlbGlzYS1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL2V4dGVybmFsLWxpbmsucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sZ0JBQWdCO0lBQ3pCLFNBQVMsQ0FBQyxLQUFhLEVBQUUsR0FBRyxJQUFjO1FBQ3RDLE9BQU8sSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDOzs7WUFOSixJQUFJLFNBQUM7Z0JBQ0YsSUFBSSxFQUFFLGNBQWM7YUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgICBuYW1lOiAnZXh0ZXJuYWxMaW5rJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxMaW5rUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG4gICAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcsIC4uLmFyZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJy8vJyArIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==