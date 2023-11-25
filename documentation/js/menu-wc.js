'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-basic documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ac3422947d01234ff5eb74edcceae438d2009aebb9a7016b55b98316a6882539e283ed00d92c46b91df8b14fa54be03c2b9d7b9b5616a305d9a3a121123b5b24"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ac3422947d01234ff5eb74edcceae438d2009aebb9a7016b55b98316a6882539e283ed00d92c46b91df8b14fa54be03c2b9d7b9b5616a305d9a3a121123b5b24"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ac3422947d01234ff5eb74edcceae438d2009aebb9a7016b55b98316a6882539e283ed00d92c46b91df8b14fa54be03c2b9d7b9b5616a305d9a3a121123b5b24"' :
                                            'id="xs-controllers-links-module-AppModule-ac3422947d01234ff5eb74edcceae438d2009aebb9a7016b55b98316a6882539e283ed00d92c46b91df8b14fa54be03c2b9d7b9b5616a305d9a3a121123b5b24"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ac3422947d01234ff5eb74edcceae438d2009aebb9a7016b55b98316a6882539e283ed00d92c46b91df8b14fa54be03c2b9d7b9b5616a305d9a3a121123b5b24"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ac3422947d01234ff5eb74edcceae438d2009aebb9a7016b55b98316a6882539e283ed00d92c46b91df8b14fa54be03c2b9d7b9b5616a305d9a3a121123b5b24"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ac3422947d01234ff5eb74edcceae438d2009aebb9a7016b55b98316a6882539e283ed00d92c46b91df8b14fa54be03c2b9d7b9b5616a305d9a3a121123b5b24"' :
                                        'id="xs-injectables-links-module-AppModule-ac3422947d01234ff5eb74edcceae438d2009aebb9a7016b55b98316a6882539e283ed00d92c46b91df8b14fa54be03c2b9d7b9b5616a305d9a3a121123b5b24"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-83cf165a60fe15715eb08e88b3e2a88da37303f96ed0d2269a5db3988e2a634853b337f7a5ab5c36b5ef59fd833d5ef936150a260af1e198b48d7f50c71db6ee"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-83cf165a60fe15715eb08e88b3e2a88da37303f96ed0d2269a5db3988e2a634853b337f7a5ab5c36b5ef59fd833d5ef936150a260af1e198b48d7f50c71db6ee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-83cf165a60fe15715eb08e88b3e2a88da37303f96ed0d2269a5db3988e2a634853b337f7a5ab5c36b5ef59fd833d5ef936150a260af1e198b48d7f50c71db6ee"' :
                                            'id="xs-controllers-links-module-AuthModule-83cf165a60fe15715eb08e88b3e2a88da37303f96ed0d2269a5db3988e2a634853b337f7a5ab5c36b5ef59fd833d5ef936150a260af1e198b48d7f50c71db6ee"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-83cf165a60fe15715eb08e88b3e2a88da37303f96ed0d2269a5db3988e2a634853b337f7a5ab5c36b5ef59fd833d5ef936150a260af1e198b48d7f50c71db6ee"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-83cf165a60fe15715eb08e88b3e2a88da37303f96ed0d2269a5db3988e2a634853b337f7a5ab5c36b5ef59fd833d5ef936150a260af1e198b48d7f50c71db6ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-83cf165a60fe15715eb08e88b3e2a88da37303f96ed0d2269a5db3988e2a634853b337f7a5ab5c36b5ef59fd833d5ef936150a260af1e198b48d7f50c71db6ee"' :
                                        'id="xs-injectables-links-module-AuthModule-83cf165a60fe15715eb08e88b3e2a88da37303f96ed0d2269a5db3988e2a634853b337f7a5ab5c36b5ef59fd833d5ef936150a260af1e198b48d7f50c71db6ee"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-f0fe0d42b97be8d68c4d67f130160e69cf963aac99e966b1dabed65435370e956fcbc5a7f34b809edd22cddc990b6d644334e16f7a86ff716a628ce1abc9a747"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-f0fe0d42b97be8d68c4d67f130160e69cf963aac99e966b1dabed65435370e956fcbc5a7f34b809edd22cddc990b6d644334e16f7a86ff716a628ce1abc9a747"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-f0fe0d42b97be8d68c4d67f130160e69cf963aac99e966b1dabed65435370e956fcbc5a7f34b809edd22cddc990b6d644334e16f7a86ff716a628ce1abc9a747"' :
                                        'id="xs-injectables-links-module-PrismaModule-f0fe0d42b97be8d68c4d67f130160e69cf963aac99e966b1dabed65435370e956fcbc5a7f34b809edd22cddc990b6d644334e16f7a86ff716a628ce1abc9a747"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-5ff76d4d0f98e1e30d063a90bb41c7577771ff225076fd59d58b8820d5ea838d9b8a5fd55d9edd564f41b12f47520c7528e531d7b76528748e39b2b18c88e568"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-5ff76d4d0f98e1e30d063a90bb41c7577771ff225076fd59d58b8820d5ea838d9b8a5fd55d9edd564f41b12f47520c7528e531d7b76528748e39b2b18c88e568"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-5ff76d4d0f98e1e30d063a90bb41c7577771ff225076fd59d58b8820d5ea838d9b8a5fd55d9edd564f41b12f47520c7528e531d7b76528748e39b2b18c88e568"' :
                                            'id="xs-controllers-links-module-SchoolModule-5ff76d4d0f98e1e30d063a90bb41c7577771ff225076fd59d58b8820d5ea838d9b8a5fd55d9edd564f41b12f47520c7528e531d7b76528748e39b2b18c88e568"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-5ff76d4d0f98e1e30d063a90bb41c7577771ff225076fd59d58b8820d5ea838d9b8a5fd55d9edd564f41b12f47520c7528e531d7b76528748e39b2b18c88e568"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-5ff76d4d0f98e1e30d063a90bb41c7577771ff225076fd59d58b8820d5ea838d9b8a5fd55d9edd564f41b12f47520c7528e531d7b76528748e39b2b18c88e568"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-5ff76d4d0f98e1e30d063a90bb41c7577771ff225076fd59d58b8820d5ea838d9b8a5fd55d9edd564f41b12f47520c7528e531d7b76528748e39b2b18c88e568"' :
                                        'id="xs-injectables-links-module-SchoolModule-5ff76d4d0f98e1e30d063a90bb41c7577771ff225076fd59d58b8820d5ea838d9b8a5fd55d9edd564f41b12f47520c7528e531d7b76528748e39b2b18c88e568"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' :
                                            'id="xs-controllers-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' :
                                        'id="xs-injectables-links-module-TaskModule-e9e2935bdbfb63264cdc4512a991c684734eaa03949d7cb7d9fd07d8c1e5ef05d589fde37d81b530f574525ee4c75172f6212bb95b44ee43f645a6e4f1f4468f"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SchoolController.html" data-type="entity-link" >SchoolController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaskController.html" data-type="entity-link" >TaskController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDTO.html" data-type="entity-link" >CreateTaskDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDTO.html" data-type="entity-link" >UpdateTaskDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolService.html" data-type="entity-link" >SchoolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskService.html" data-type="entity-link" >TaskService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});