"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const validation_pipe_1 = require("@nestjs/common/pipes/validation.pipe");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:5173',
        methods: 'GET,POST,PUT,DELETE',
        credentials: true,
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Polls')
        .setDescription('Polls api')
        .setVersion('1.0')
        .addTag('poll')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, documentFactory);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map