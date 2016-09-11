import {Pipe} from '@angular/core';

@Pipe({
    name: 'categoryList'
})
export class CategoryListPipe {
    transform(mediaItems:Object[]) {
        var categories:any = [];
        mediaItems.forEach(mediaItem => {
            if (categories.indexOf(mediaItem["type"]) <= -1) {
                categories.push(mediaItem["type"]);
            }
        });
        return categories.join(', ');
    }
}

