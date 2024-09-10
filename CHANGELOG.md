# Changelog

## [1.3.0](https://github.com/webmappsrl/map-core/compare/v1.2.0...v1.3.0) (2024-09-10)


### Features

* add Google Maps navigation to POIs ([c9d2831](https://github.com/webmappsrl/map-core/commit/c9d2831d2d4f0c11226d073fbdba33ec89883470))
* Add style update for selected feature in WmMapFeatureCollectionDirective ([b08b1e2](https://github.com/webmappsrl/map-core/commit/b08b1e2a6363197e75c47dc5bda2beed1a518cf1))
* Add support for creating POI markers from FeatureCollection oc: 2534 ([d7c7493](https://github.com/webmappsrl/map-core/commit/d7c74931d7944f66718287485a895dda5048a818))
* Add support for MultiPolygon and GeometryCollection styles ([c350978](https://github.com/webmappsrl/map-core/commit/c3509783bda1a8895504358ae4606d038a26b4ee))
* Add wmMapFeatureCollectionPopup event ([707fb22](https://github.com/webmappsrl/map-core/commit/707fb22aec7103943b7c3040f355b13850a86029))
* Add wmMapGeojsonFit input to WmMapGeojsonDirective ([f186066](https://github.com/webmappsrl/map-core/commit/f1860663437cc9ac06930f56e5f912bee64fd528))
* **controls:** select default overlay on initialization oc:2880 ([28380b6](https://github.com/webmappsrl/map-core/commit/28380b6afb8947857133f30d35e1c4a865433955))
* **directive:** add createArrowStyle function ([1426d57](https://github.com/webmappsrl/map-core/commit/1426d57cff59c2efe9298577ad04de8735c1efab))
* Emit events for feature collection layer selection and popup ([4a4a275](https://github.com/webmappsrl/map-core/commit/4a4a2755adb357745a59e1886b42ce9980f83180))
* enhance feature selection in map directive deadline:82 ([4fd82f4](https://github.com/webmappsrl/map-core/commit/4fd82f493aab5234b53ddd1b93b66712e361a904))
* **hit-map:** add hit map directive ([b521e77](https://github.com/webmappsrl/map-core/commit/b521e771892996ea474c80a36fc4ad022eb48bc5))
* **hit-map:** add hit map directive ([8872571](https://github.com/webmappsrl/map-core/commit/88725712ecf867d10451db5ec65ee0935c2e442c))
* introduce minimum radius for map features ([3d240c1](https://github.com/webmappsrl/map-core/commit/3d240c18d5f5753b3394ecb8c47194a19eb73b59))
* **map.component:** add fullscreen control option to map ([bb860b2](https://github.com/webmappsrl/map-core/commit/bb860b2230e926bdf59d22556f531dc4640dad93))
* **style:** change buildRefStyle logic ([b7aa27c](https://github.com/webmappsrl/map-core/commit/b7aa27cd699aef567923df4cead8d6ba236de208))
* Update feature-collection directive to handle null popup property ([ff22d09](https://github.com/webmappsrl/map-core/commit/ff22d0972b8729e1f7629ee700ddafb6badc16e0))
* Update styles.ts ([ea9d2c3](https://github.com/webmappsrl/map-core/commit/ea9d2c371573df650c252cc79ee21db3e89d0970))


### Bug Fixes

* add icon url ([ee05dd2](https://github.com/webmappsrl/map-core/commit/ee05dd2fc317ab84d333e23acb72c76a78858625))
* **controls:** add scrollable list ([1f6935b](https://github.com/webmappsrl/map-core/commit/1f6935b78d6da2e39d88ec3d537bfe4c1034a752))
* **feature-collection.directive:** add selected layer ([15b1951](https://github.com/webmappsrl/map-core/commit/15b1951ddefd5b4313b80893925db8d02b9f8860))
* **feature-collection.directive:** when fc changes reset selected layer ([a599d9a](https://github.com/webmappsrl/map-core/commit/a599d9aef0fd4becbfc657f51045f3eb87e2b6c9))
* Filter out overlays with null or undefined URLs in feature-collection.directive.ts ([44ab323](https://github.com/webmappsrl/map-core/commit/44ab323d7a32621505e93674015b95844e293c3f))
* Filter out overlays with null or undefined URLs in feature-collection.directive.ts ([8742e3a](https://github.com/webmappsrl/map-core/commit/8742e3a1f1ed1f98bf051e1d9dde5a602dbbbc23))
* Fix logic to select a specific point of interest (POI) ([1250612](https://github.com/webmappsrl/map-core/commit/12506120cc3d41b6d66e08dd4d9c6963d9dbb6b0))
* handle null values in taxonomyIdentifiers filter oc: 3572 ([aa06579](https://github.com/webmappsrl/map-core/commit/aa06579a525ef2cac1e012010024c74200d082ed))
* modify TRESHOLD_ENABLE_FIT oc: 2885 ([c953844](https://github.com/webmappsrl/map-core/commit/c953844f7cb0362e95b5337584a377025e5654da))
* remove line-icon-arrow in all tracks id:2412 ([75d6cd5](https://github.com/webmappsrl/map-core/commit/75d6cd5040dbabd087e431848c548ab90aa094ae))
* **styles:** removed unnecessary condition check in buildRefStyle function ([72b75ca](https://github.com/webmappsrl/map-core/commit/72b75ca9935a8427b2ba70ba1fd8263b06a6b53d))
* update popover ([3141ad4](https://github.com/webmappsrl/map-core/commit/3141ad433df614f98add5557ecd4680203a0c3bd))


### Miscellaneous

* add map attribution ([575ae03](https://github.com/webmappsrl/map-core/commit/575ae0349e0c59e75850b4f69b670a820ec3b359))
* Delay initialization of map controls ([2972b80](https://github.com/webmappsrl/map-core/commit/2972b808013f635f4b98f86791721fc687ccd03c))
* **directive/hit-map:** move check in input setter ([f11200f](https://github.com/webmappsrl/map-core/commit/f11200f2871408fec1c19c19c1441312d9bf0733))
* increase timeout for initializing data in WmMapControls ([808bb6b](https://github.com/webmappsrl/map-core/commit/808bb6bfa6ce7d4e21ba379a093cb46e318d60ea))
* Refactor controls.map.html layout ([e1fff86](https://github.com/webmappsrl/map-core/commit/e1fff86852af8c4b09cfad5e31d110dd33d9133d))
* Refactor feature collection directive ([74cb612](https://github.com/webmappsrl/map-core/commit/74cb6122b6344d6771950f6ef6b3313acdacff6c))
* Refactor feature collection directive ([f048d77](https://github.com/webmappsrl/map-core/commit/f048d776f5c316783d5bbf78996d2de1fc010dc6))
* Refactor layer.directive.ts ([d22b5f9](https://github.com/webmappsrl/map-core/commit/d22b5f9d93a9cd83af60dd6b20f5d3c55978a5be))
* Refactor stroke color handling in styleCoreFn ([50c3923](https://github.com/webmappsrl/map-core/commit/50c3923ff977852b72ebdb930025af25f944e594))
* Refactor styleCoreFn in styles.ts ([dd62dbc](https://github.com/webmappsrl/map-core/commit/dd62dbcea8ac9e9c96dee74247dd41a32f71a8ee))
* Refactor styleCoreFn in styles.ts deadline:82 ([948c728](https://github.com/webmappsrl/map-core/commit/948c7282d33829b157add1a6d07d98a04aa0ac5e))
* Refactor styleCoreFn in styles.ts oc:3846 ([6f31d15](https://github.com/webmappsrl/map-core/commit/6f31d15ed7dafad9c1fc1f1b35f6ccf978fd48f1))
* Remove unnecessary code in feature-collection.directive.ts ([0061e8d](https://github.com/webmappsrl/map-core/commit/0061e8de8924391ea9939f645ef82b842a78327a))
* Remove unnecessary code in pois.directive.ts ([a7d384a](https://github.com/webmappsrl/map-core/commit/a7d384a6f313ecffc8026c5124cfb5c48477089b))
* Remove unused code and improve arrow style in track.directive.ts ([73b7750](https://github.com/webmappsrl/map-core/commit/73b775094962c1ce6e7c454a90a409ecf63d244a))
* Remove unused variables and functions ([50daadf](https://github.com/webmappsrl/map-core/commit/50daadf8f70d10e95814436670dc6bb1aa7c9317))
* Update buildArrowStyle function to include an optional circle parameter ([75d6cd5](https://github.com/webmappsrl/map-core/commit/75d6cd5040dbabd087e431848c548ab90aa094ae))
* Update buildRefStyle function in styles.ts ([cc72f99](https://github.com/webmappsrl/map-core/commit/cc72f9992cda9b1b397ae9e260e454a2683c7229))
* Update button.controls.map.ts and map-core.actions.ts oc: 3825 ([7322993](https://github.com/webmappsrl/map-core/commit/73229931e09b9631b21bc8497f1d2323478b40dd))
* Update controls.map.html ([e3c3a1f](https://github.com/webmappsrl/map-core/commit/e3c3a1f439d4d916fec8d41b45f7d9ae16c3aaa6))
* Update controls.map.html and controls.map.ts ([524cc03](https://github.com/webmappsrl/map-core/commit/524cc03cfa4a21c73ee93279390aa3c01596c351))
* Update controls.map.scss ([7eca459](https://github.com/webmappsrl/map-core/commit/7eca459079f21e3ebd5408703b600ac7bfaa8bcd))
* Update controls.map.scss ([a0ae6d8](https://github.com/webmappsrl/map-core/commit/a0ae6d836de8d0777cb4aa9ba9d22cb4c7e7beed))
* Update feature collection and style handling ([5925ac8](https://github.com/webmappsrl/map-core/commit/5925ac8ac2238be735931892c8ecdcdcbd02ccae))
* Update feature-collection.directive.ts ([fd4b6c0](https://github.com/webmappsrl/map-core/commit/fd4b6c0d794fb910c31d563b39586ecb3b18151b))
* Update feature-collection.directive.ts ([51d670d](https://github.com/webmappsrl/map-core/commit/51d670d2b263f59b0b277bbe7392717132b41458))
* Update hit-map.directive.ts ([f2be93a](https://github.com/webmappsrl/map-core/commit/f2be93af76f528ea0e0891b7bc2ca9338872a208))
* Update map and pois directive ([cb08f29](https://github.com/webmappsrl/map-core/commit/cb08f297f6d496d1204d1d1be0633b469ffb4408))
* Update map.component.ts ([b1cae5c](https://github.com/webmappsrl/map-core/commit/b1cae5c95844c21d976732cfd4ab3b35e4b2a110))
* Update stroke width adjustments in styleCoreFn function. Adjust minStrokeWidth values by 2 instead of 10 and 20 for better rendering consistency. ([3f9fc7f](https://github.com/webmappsrl/map-core/commit/3f9fc7f58015da96f67e1b8396e4a67e16a2aaac))
* Update styles.ts ([7d06326](https://github.com/webmappsrl/map-core/commit/7d06326cd97b7ed27c20e612745d94977e0f4fbf))
* Update subproject button.controls.map.scss, button.controls.map.ts, controls.map.html, controls.map.ts, map.component.html, map.component.ts, feature-collection.directive.ts and model.ts ([4727e52](https://github.com/webmappsrl/map-core/commit/4727e521e2a087f469946a07b2b6e1ccc3a50da1))
* Update subproject with new constants OC:3912,3911 ([b984af4](https://github.com/webmappsrl/map-core/commit/b984af43f87d8ab3df28b2aa2e949832cb97314d))
* Update toggle logic in controls map component ([5f8978c](https://github.com/webmappsrl/map-core/commit/5f8978cca69111fd677f5fdba4fa5c0c200be0ed))
* Update track.related-pois.directive.ts ([be87174](https://github.com/webmappsrl/map-core/commit/be8717426240ce2d949e18624ad3737dad8baa4f))
* Update track.related-pois.directive.ts ([766e095](https://github.com/webmappsrl/map-core/commit/766e09533fb2a2a9343aff9e32271392f3793777))
* Update track.related-pois.directive.ts ([#19](https://github.com/webmappsrl/map-core/issues/19)) ([b510bbc](https://github.com/webmappsrl/map-core/commit/b510bbcfc6da55e706c503a88aa78229f301cab1))
* Update VSCode settings and feature-collection.directive.ts ([ce57dde](https://github.com/webmappsrl/map-core/commit/ce57dded71a508bda9d1f20610b360e64ba2e9ca))

## [1.2.0](https://github.com/webmappsrl/map-core/compare/v1.1.1...v1.2.0) (2023-10-31)


### Features

* Add support for data buttons in map controls ([299a303](https://github.com/webmappsrl/map-core/commit/299a303bcb526dd034b332c33545e80e98e1ee9b))
* **directives:** add fill color to feature collection directive ([9af86d8](https://github.com/webmappsrl/map-core/commit/9af86d807e18cec585dc532887480cd888d6d14f)), closes [#1875](https://github.com/webmappsrl/map-core/issues/1875)


### Bug Fixes

* Add click interaction for feature collection and pois directives ([e788001](https://github.com/webmappsrl/map-core/commit/e788001a731b4a96da75c3ccd0b3751fa98ef3e6))
* Fix bug in feature-collection directive ([87a634a](https://github.com/webmappsrl/map-core/commit/87a634a7b17beeb7daa0a6440a492ef1a75a4382))


### Miscellaneous

* Add controls.map.html and update controls.map.ts ([0823d83](https://github.com/webmappsrl/map-core/commit/0823d8392c96fa671b7abef2a1c5c28cf2f63f5d))
* Refactor controls.map ([299a303](https://github.com/webmappsrl/map-core/commit/299a303bcb526dd034b332c33545e80e98e1ee9b))
* Remove unused code and optimize feature collection directive ([0211cc3](https://github.com/webmappsrl/map-core/commit/0211cc302fe802429a94c0ba57126a4221deba0c)), closes [#1876](https://github.com/webmappsrl/map-core/issues/1876)
* Remove unused code and refactor feature selection logic ([6a5c4a1](https://github.com/webmappsrl/map-core/commit/6a5c4a1ef75b90292c035ded070deb8fc4788840))
* Remove unused code in createHull function ([a5cceda](https://github.com/webmappsrl/map-core/commit/a5cceda863210373b3a6a10efaec5c835a510d63))
* Update controls.map.html ([cd0ebd9](https://github.com/webmappsrl/map-core/commit/cd0ebd984e4a241e05284943f049f0eefc6962c9))
* Update controls.map.ts to handle empty data and overlays arrays ([980896b](https://github.com/webmappsrl/map-core/commit/980896b7a40f5546dd2f28a0d416d027f5b03c95))
* Update createHull function in ol.ts ([85bc0e9](https://github.com/webmappsrl/map-core/commit/85bc0e973c2b021a725ce7a643b4aec5ff7eb545))
* Update feature-collection.directive.ts ([565db9d](https://github.com/webmappsrl/map-core/commit/565db9dd6a0fd99cf54cec61c55e05cb7f69ed16))
* Update map component, feature collection directive, and pois directive ([4845df6](https://github.com/webmappsrl/map-core/commit/4845df610c91e154f26d365f4031c7829b66ff79))
* Update ol-ext dependency to version 4.0.11 ([a0e8ef9](https://github.com/webmappsrl/map-core/commit/a0e8ef94914948ebc72689f2a7b7e99ecf61a160))
* Update WmMapFeatureCollectionDirective ([e9dbca4](https://github.com/webmappsrl/map-core/commit/e9dbca4210f220c129bf5aa1a35074f8e871b039)), closes [#1876](https://github.com/webmappsrl/map-core/issues/1876)

## [1.1.1](https://github.com/webmappsrl/map-core/compare/v1.1.0...v1.1.1) (2023-10-05)


### Bug Fixes

* Simplify style retrieval logic in styleCoreFn ([be775fd](https://github.com/webmappsrl/map-core/commit/be775fdc51096e2b0cb851270e2da10f56884d2a))


### Miscellaneous

* Update README.md ([ad5bcf6](https://github.com/webmappsrl/map-core/commit/ad5bcf68c227026a3cff79b6b0a85bc7e4b8d506))

## [1.1.0](https://github.com/webmappsrl/map-core/compare/v1.0.5...v1.1.0) (2023-10-03)


### Features

* Add release_please.yml workflow ([e761edd](https://github.com/webmappsrl/map-core/commit/e761edd867199f3db9ac3ad8eb69aae72d26fb8f))
* **control.map:** add map control close ([dae534c](https://github.com/webmappsrl/map-core/commit/dae534cae0669298cd3be7b67cfa2a43f665f07b))
* **demo:** add demo app ([43e3deb](https://github.com/webmappsrl/map-core/commit/43e3deb395032df4b9c47071b61d776604515f44))
* **demo:** added display of information about the selected poi on track related pois page ([2218687](https://github.com/webmappsrl/map-core/commit/22186878d1705ea45b6d27e1ce066289dcbd9219))
* **demo:** added documentation for inputs and outputs for custom tracks page ([61af81e](https://github.com/webmappsrl/map-core/commit/61af81ece9981494548d3eb27fee58b4b10bd0f1))
* **demo:** added documentation for inputs and outputs in component map and directive track ([0591ca1](https://github.com/webmappsrl/map-core/commit/0591ca180c71f228d676b90a6d39b752cd1490b7))
* **demo:** added inputs and outputs documentation for layer and position pages ([40c3e6f](https://github.com/webmappsrl/map-core/commit/40c3e6f30e6dbc20c95558ab458784314d40bdeb))
* **demo:** added inputs and outputs documentation for overlay and track related pois pages ([4412942](https://github.com/webmappsrl/map-core/commit/441294286078e379c36b84c5471d307b1d298982))
* **demo:** added inputs and outputs documentation for pois page ([36b0af4](https://github.com/webmappsrl/map-core/commit/36b0af401f222fbcc8ca0d1ac114201ebcbf82b6))
* **demo:** added more infos on custom track directive page ([c73f601](https://github.com/webmappsrl/map-core/commit/c73f601fef33a2dd00af238b2954e75ef7fdf990))
* **demo:** app routing updated ([75cbfc8](https://github.com/webmappsrl/map-core/commit/75cbfc8a5d2b1b93c05fad3ae4a956354c939dba))
* **demo:** custom draw track directive added to demo ([c2830a1](https://github.com/webmappsrl/map-core/commit/c2830a1990cf106bb21fee8d894b8eac5269918c))
* **demo:** layer directive added to demo ([ae8047e](https://github.com/webmappsrl/map-core/commit/ae8047e943f2133b4fac612b7b17d44074a9c012))
* **demo:** left bar style updated ([bef648f](https://github.com/webmappsrl/map-core/commit/bef648fee400971f563c9906e4e7f0585d044052))
* **demo:** left bar style updated ([609bbdf](https://github.com/webmappsrl/map-core/commit/609bbdfdf76b31234aae8cdd670a16e59f5df923))
* **demo:** lstyle updated ([bceaa1a](https://github.com/webmappsrl/map-core/commit/bceaa1a480b53f9acb7265760ca4a27c29ab91c9))
* **demo:** overlay directive added to demo ([f3941d9](https://github.com/webmappsrl/map-core/commit/f3941d9e63e3bc93923ee001c1709c6ba565a0ae))
* **demo:** pois directive added to demo ([0d34311](https://github.com/webmappsrl/map-core/commit/0d34311da286b507d00af047a846542753e8ac62))
* **demo:** position directive added to demo ([a2fcc28](https://github.com/webmappsrl/map-core/commit/a2fcc28fa0a898032cc46ff1237708c4165432d3))
* **demo:** refactor ([fee45b3](https://github.com/webmappsrl/map-core/commit/fee45b3d4282595ea59d3ee824b812ce42c2b4cb))
* **demo:** refactor and code cleanup ([418f6f3](https://github.com/webmappsrl/map-core/commit/418f6f3f1df4a7f40f69b4deaff3cdc0fcca729b))
* **demo:** refactor on track related pois page ([06cc1ff](https://github.com/webmappsrl/map-core/commit/06cc1ff77f616ec84f74842047ad1fdc7ec30fcf))
* **demo:** scss refactor ([fbee10f](https://github.com/webmappsrl/map-core/commit/fbee10f59c304448da66f9bd0e61d6b28015da68))
* **demo:** scss updated for custom tracks and track related pois ([064607d](https://github.com/webmappsrl/map-core/commit/064607d323d740dd26fcb6c2a084416de2ea44d4))
* **demo:** start implementing left-bar with map and track route ([144175c](https://github.com/webmappsrl/map-core/commit/144175cba9d578578e5015f40d93a6fc337e4a9b))
* **demo:** start implementing left-bar with map and track route ([44035fd](https://github.com/webmappsrl/map-core/commit/44035fd6c8c9f472129e659178225cf6c0e4bf48))
* **demo:** track directive added to demo ([1e91b86](https://github.com/webmappsrl/map-core/commit/1e91b8607376a5a77841b758cafcbad56522f210))
* **demo:** track related pois directive added to demo ([41ee431](https://github.com/webmappsrl/map-core/commit/41ee431a7f7444e01ad305818fe54e51f7aa90b7))
* **directive/geojson:** add geojson directive ([fae8d4e](https://github.com/webmappsrl/map-core/commit/fae8d4e1e60ff3dd7b4d0565206017f7a7af27e4))
* **directive/pois: filter by layer:** implements ([3fb5e3b](https://github.com/webmappsrl/map-core/commit/3fb5e3b5777ecb087655d06ed1d355b51a0acbbc))
* **directives/feature-collection:** set opacity to 0.4 ([d4c7df4](https://github.com/webmappsrl/map-core/commit/d4c7df4c20f39ee138cb93e5650af25090264cb9))
* **directives/layer_pois:** filter by inputType in searcheable property ([49bf7d5](https://github.com/webmappsrl/map-core/commit/49bf7d5eecd99dd0861e5b1fe9741c68bb33b12a))
* **filters:** implements slider filters ([b745f38](https://github.com/webmappsrl/map-core/commit/b745f38a5a96d4d0a5ae2491b78c644d740fcddb))
* **fitview_map_component:** implements ([e77d1f6](https://github.com/webmappsrl/map-core/commit/e77d1f66f4ff5a2c848e1c7d7c1f25a5c32794bc))
* **i_miei_percorsi:** implements ([7502a31](https://github.com/webmappsrl/map-core/commit/7502a3193ed94ef5c594891c7ca086385668dfc5))
* **Lettura del colore della traccia:** implements ([0782f72](https://github.com/webmappsrl/map-core/commit/0782f72b64c79e0ef58b7bf1edde78e1564d3be0))
* **loading:** dismiss loading after first rendering ([d4da6d7](https://github.com/webmappsrl/map-core/commit/d4da6d7f8c0bde9f555afc5803fd2f3dbdf361cb))
* **ol:** add createIconFeatureFromSrc() ([1256d8b](https://github.com/webmappsrl/map-core/commit/1256d8b80fbd49ef765e7ca563a8125c591179e1))
* **start_end_icons_zindex:** implements ([e75073c](https://github.com/webmappsrl/map-core/commit/e75073c73e8e7ea4eff18cf057895c08146ff27d))
* **start_end_icons_zindex:** implements ([e75073c](https://github.com/webmappsrl/map-core/commit/e75073c73e8e7ea4eff18cf057895c08146ff27d))
* **ui_ux_improvements_map:** adding next and prev color in animateFeature animation ([#13](https://github.com/webmappsrl/map-core/issues/13)) ([67fad8e](https://github.com/webmappsrl/map-core/commit/67fad8e08876dafd97932fb19156416f552fbc0e))


### Bug Fixes

* **demo:** bug fixing for track color and padding map ([9085d85](https://github.com/webmappsrl/map-core/commit/9085d85f3f8dc031ef0b92d08732fa97480bd176))
* **directive/custo-track-draw:** force track rendering ([e6e3987](https://github.com/webmappsrl/map-core/commit/e6e3987c4afbb56a18f7ceba14486d2b1bc74547))
* **directive/custom-track-draw:** switch to createIconFeatureFromSrc ([f45ecb3](https://github.com/webmappsrl/map-core/commit/f45ecb36ec9d2bdfcf2037ba776699eddd59bee1))
* **directive/feature-collection:** remove mock ([c397ec9](https://github.com/webmappsrl/map-core/commit/c397ec9d60fbc3501447e7aefb102a0562b32f77))
* **directive/pois:** remove ol-map set target ([204e513](https://github.com/webmappsrl/map-core/commit/204e513a0bef335bfa28380909e2b9e7d9307f97))
* **directive/position:** fix assets path ([7a9aab7](https://github.com/webmappsrl/map-core/commit/7a9aab71ec45a799a1605fdb1a790566d59588cb))
* **directive/track:** changes  inside isInit ([788344c](https://github.com/webmappsrl/map-core/commit/788344c933becada8d60a80344273ead7bc202d0))
* **directives/layer:** improve layer  vectorTile rendering ([c4e0980](https://github.com/webmappsrl/map-core/commit/c4e09802248c57b2d646ec5fca4c8fed8bee7028))
* **directives/pois:** fitview ([aadf77f](https://github.com/webmappsrl/map-core/commit/aadf77f3306d0149f0219805bed5bf11a8a08a4b))
* **directives/pois:** POI zoom back to default ([59fd29e](https://github.com/webmappsrl/map-core/commit/59fd29eec1ba84d0378f3347a088a7c7944d57cd))
* **directives/track.related_pois:** set right zindex ([395afd9](https://github.com/webmappsrl/map-core/commit/395afd995288ae338211d8faa84ab66d8a8b7149))
* **fitView:** add priority ([440f8c2](https://github.com/webmappsrl/map-core/commit/440f8c20fd89a30eb67ff6aeed126f6d46609940))
* **fitView:** handling fitView timing ([a81b2b3](https://github.com/webmappsrl/map-core/commit/a81b2b32b36fa9936923b8701dc434b9a2d94e52))
* **Hide popups when going back to homepage:** implements ([3362489](https://github.com/webmappsrl/map-core/commit/3362489a3d6cb0bb97189ab9b717aa22e0983dd6))
* **i_miei_percorsi_icon_bug:** fix rendering issue ([e05543f](https://github.com/webmappsrl/map-core/commit/e05543f94f145e90af5b020937171573a6f2a424))
* **i_miei_percorsi_icon_bug:** start of implementation ([e05543f](https://github.com/webmappsrl/map-core/commit/e05543f94f145e90af5b020937171573a6f2a424))
* **map:** blank page when switch from off line to online ([cbde36c](https://github.com/webmappsrl/map-core/commit/cbde36c8ff3e17e3ad757a0d1b7d3b24c298c0e3))
* **Navigate to the next or previous story:** done ([e621dfc](https://github.com/webmappsrl/map-core/commit/e621dfc410c69cfb3531985e96ed70b0a0fe7a64))
* **navigation:** correct location centering ([b3a34aa](https://github.com/webmappsrl/map-core/commit/b3a34aac57f0cd4b6095821115983297677a7c7d))
* **overlayes - parco-png:** ref 1053 ([3506640](https://github.com/webmappsrl/map-core/commit/3506640215f3e8a96444778914dd069dfffaf64a))
* **overlayes - parco-png:** ref 1054 ([6644e28](https://github.com/webmappsrl/map-core/commit/6644e284d0755eb282f6a85122ea41db34ab7170))
* **overlays - parco-pnc:** ref 1050 ([461d82d](https://github.com/webmappsrl/map-core/commit/461d82d09f0f6ffc962a765ba560ab7237f417a8))
* **pois.directive:** handling missin poi_type ([0caa80b](https://github.com/webmappsrl/map-core/commit/0caa80be9688395511154d6fa3dad557d15fefb2))
* **pois.directive:** handling missin poi_type ([5cc8b53](https://github.com/webmappsrl/map-core/commit/5cc8b539e4b3570dc13b1851069070bb681e41cd))
* **record:** follow location ([93fef48](https://github.com/webmappsrl/map-core/commit/93fef48a08619e6869ce4d441e8f98cc5304d9d8))
* **selected_track_color_is_not_changing:** zindex updated for selected tracks ([9cf2905](https://github.com/webmappsrl/map-core/commit/9cf2905239ca71d30175219879940e63b8158772))
* **src/map-core.module:** updated directives in import ([d1cd909](https://github.com/webmappsrl/map-core/commit/d1cd909acd345e48675f08593bfb29b6f2b9ba87))
* **styleCoreFn:** generalize taxonomies ([05ef9aa](https://github.com/webmappsrl/map-core/commit/05ef9aa0a0783127328bc1ea78697b29f95ddc61))
* **styles:** hide start & end icons, ref when layer si not selected ([567e024](https://github.com/webmappsrl/map-core/commit/567e024780d5d7afdb9cef322311e86075daaa4e))
* **test:** hotifx on tests after the merge ([27df72f](https://github.com/webmappsrl/map-core/commit/27df72fdd88ca8ddf4346ff6fb83902effbe3633))
* **track_related_poi_icon:** patch ([a03d487](https://github.com/webmappsrl/map-core/commit/a03d4879ff384b9fd4cb82ce7a598b57f953569d))
* **wm-controls:** wmMapControlClose ([e098f94](https://github.com/webmappsrl/map-core/commit/e098f94bcc1e63039e910583233c7569df2500d3))

#### 1.0.5 (2023-05-04)

##### Build System / Dependencies

* **package:**
  *  set right version (2b897ec2)
  *  update scripts (75b2e8f9)
* **coverage:**  add coverage (0b4f3f33)
* **tsconfig:**  un wrap tsconfig (67469c0e)

##### Tests

* **components:**  test implementation (6fa57ca5)
* **utils/ol:**
  *  test implementation (df0e4ac2)
  *  test implementation (caf287f9)

#### 1.0.4 (2022-11-08)

##### Chores

* **graphhopper:**  pass to internal server conf (dedd5003)
* **layer:**  add highlight style on hover feature (07bc71ee)
* **cache:**  add indexDB by localforage (24d94f82)
* **ol:**  update ol to 7.1.0(the last) (79a2d68c)
* **cache system:**  add local storage cache system for layers (61090fc3)

##### New Features

* **map:**  add max and min stroke width by params (6314b4bc)

##### Bug Fixes

* **pois:**  selected assets icons (6898170d)

##### Other Changes

* **naming:**  change directive names (8fde67c6)

##### Performance Improvements

* **maptile:**  remove webgl rendering (f63fa2df)
* **tileMap:**  add webgl rendering (01694933)

##### Refactors

* **layer-progress-bar:**  move layer progress bar code from layer to layer-progress-bar directive (1b3b8c74)
* **highlight track:**  move highlith code from layer to highlighttrack directives (88dbf1e8)
* **draw-track:**  add toast message when point cannot routed (09651da1)

#### 1.0.3 (2022-10-21)

##### Bug Fixes

* **pois:**  handling poi popup opening (73e8f4d0)

##### Refactors

* **fitView:**  centralize fitView function (541a0988)

#### 1.0.1 (2022-10-20)

##### Other Changes

* **build:**  add changelog generator (52187efb)

#### 1.0.1 (2022-10-20)

##### Other Changes

* **build:**  add changelog generator (52187efb)


#### 1.0.0 (2022-10-20)

##### Other Changes

* **build:**  add changelog generator (52187efb)
