"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('authentification on nest js')
        .setDescription('REST API documention')
        .setVersion('1.0.0')
        .addTag('auth')
        .build();
    const doc = dist_1.SwaggerModule.createDocument(app, config);
    dist_1.SwaggerModule.setup('/api/docs', app, doc);
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map