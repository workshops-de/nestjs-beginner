import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {

    constructor() { }

    @Get()
    @Redirect('/api', 301)
    getRedirectToApi(): void { }
}
