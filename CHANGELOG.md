# Changelog

## [3.18.0](https://github.com/HeyOmae/OMA3/compare/3.17.0...3.18.0) (2026-11-02)


### Features

* open every rulebook reference in the same tab ([ccb033c](https://github.com/HeyOmae/OMA3/commit/ccb033c3484a40dd8368ea59f2582f99fbb30af9))
* open the rulebook PDF at a reference's page in Chrome and Edge ([0431d16](https://github.com/HeyOmae/OMA3/commit/0431d1646a7517ff3e993529d9c1e6b7e69afbe3))
* tooltip on rulebook references asking to link the PDF ([8202193](https://github.com/HeyOmae/OMA3/commit/8202193352bcd09114c30bf80c134fa5d91d203b))


### Bug Fixes

* jump to the new page when the rulebook tab is already open ([c4d8073](https://github.com/HeyOmae/OMA3/commit/c4d807310b6446aef4b5bcf5eaef5e46cdb81fab))

## [3.17.0](https://github.com/HeyOmae/OMA3/compare/3.16.0...3.17.0) (2026-11-02)


### Features

* show core rulebook page references for all gear ([07745b4](https://github.com/HeyOmae/OMA3/commit/07745b4f098ab2e3eb55de68067b4eaa643c3061)), closes [#797](https://github.com/HeyOmae/OMA3/issues/797)
* show core rulebook page references for magic and resonance ([c6f0105](https://github.com/HeyOmae/OMA3/commit/c6f01055504ae986c57d46f666f8d8861b1e5c92)), closes [#797](https://github.com/HeyOmae/OMA3/issues/797)
* show core rulebook page references for qualities ([bc2c82c](https://github.com/HeyOmae/OMA3/commit/bc2c82c50bf243518e58465cbdd1de591140fcd7)), closes [#797](https://github.com/HeyOmae/OMA3/issues/797)


### Refactors

* label rulebook references as the SR6 Berlin edition ([e12976f](https://github.com/HeyOmae/OMA3/commit/e12976f4a7b62081300a9860b644be97641a7265)), closes [#797](https://github.com/HeyOmae/OMA3/issues/797)

## [3.16.0](https://github.com/HeyOmae/OMA3/compare/3.15.1...3.16.0) (2026-11-02)


### Features

* add ammo ([4d99f00](https://github.com/HeyOmae/OMA3/commit/4d99f006e013bb23771faf0f00fb67925d2c40b2)), closes [#2298](https://github.com/HeyOmae/OMA3/issues/2298)


### Performance

* import MUI icons by path instead of from the barrel ([5a58efe](https://github.com/HeyOmae/OMA3/commit/5a58efe019eda61688eee0b76e016b94486c8d37))
* rewrite MUI icon barrel imports in tests ([0430419](https://github.com/HeyOmae/OMA3/commit/0430419d795d4487f88b509fccf9ddc2afef60df))


### Refactors

* split up the magic and initiative components ([66c0f19](https://github.com/HeyOmae/OMA3/commit/66c0f194ecba1fe745006abca69c8914f40c5d9c))
* strict types for gear tables, mods and magic ([47cbd4c](https://github.com/HeyOmae/OMA3/commit/47cbd4c19f4ab28788d3f54c2625c2e01fb9dcdb))
* strict types for skills ([0317cd0](https://github.com/HeyOmae/OMA3/commit/0317cd0ac9af65767f5e34320ba93c5b84f8346f))
* strict types for the rest of the app ([534281d](https://github.com/HeyOmae/OMA3/commit/534281de12afa43b6ae9acd2de6ca7d905adf927))
* type the complex form, ritual and adept power data ([81e835e](https://github.com/HeyOmae/OMA3/commit/81e835ef739ae9186e2d70053ea473cf4dd25a8a))
* type the gear pages by the resources they save to ([54d1288](https://github.com/HeyOmae/OMA3/commit/54d1288d793d4040542bca44ab7374579af7e211))
* type the priority table and the metatype page ([3f4d950](https://github.com/HeyOmae/OMA3/commit/3f4d9509d1c2848389a5a679f15f8d77a200513e))
* type the skill and metatype data ([7df0aa5](https://github.com/HeyOmae/OMA3/commit/7df0aa575f2c9682fd8f116927c877569df6ec60))
* type the spell data ([80df72a](https://github.com/HeyOmae/OMA3/commit/80df72a29ab0420d5f6fbdd3459e6ab7964059e2))


### Maintenance

* lint for functions that are too complex ([ca3a6b0](https://github.com/HeyOmae/OMA3/commit/ca3a6b012a9263b28776d47b77b359b7fad39a97))
* turn on strict type checking ([a4c0e0b](https://github.com/HeyOmae/OMA3/commit/a4c0e0b77f4c3fde8b4cfd078fb4066868a2ba0d))

## [3.15.1](https://github.com/HeyOmae/OMA3/compare/3.15.0...3.15.1) (2026-11-01)


### Bug Fixes

* show ¥ on lifestyle costs when buying ([a73bbf2](https://github.com/HeyOmae/OMA3/commit/a73bbf2421729b0ae84a01760812dc236a0709be))
* targeting autosofts pick any firearm model instead of spinning forever ([e755c8d](https://github.com/HeyOmae/OMA3/commit/e755c8d80047483620a9c801f1d89dda5b3c03d5))

## [3.15.0](https://github.com/HeyOmae/OMA3/compare/3.14.0...3.15.0) (2026-11-01)


### Features

* add software page for programs, mapsofts and skillsofts ([6eb0e4c](https://github.com/HeyOmae/OMA3/commit/6eb0e4c6c0990380092519e50f7df5f6b19897ee)), closes [#2297](https://github.com/HeyOmae/OMA3/issues/2297)


### Performance

* only load runner migrations when a runner needs them ([4d00e86](https://github.com/HeyOmae/OMA3/commit/4d00e86026bc0090156be6bbbf0cb4831261f8c0))


### Refactors

* make gear modifications consistent ([33ee273](https://github.com/HeyOmae/OMA3/commit/33ee273867e9ddf74323592dce09be3c2d3996c3))
* make useAs a list on all gear ([b15b8a3](https://github.com/HeyOmae/OMA3/commit/b15b8a3b805c200e16990a6bf0e9e2c13d829263))
* simplify the gear types and remove casts ([bcd776d](https://github.com/HeyOmae/OMA3/commit/bcd776d8c18a03c432c1f22039be65b3b3a7fe49))
* version saved runners so their data can be migrated ([97a72e9](https://github.com/HeyOmae/OMA3/commit/97a72e982ef7ee121ebf667e37a395c1b7d3b63b))


### Maintenance

* ignore claude.md ([83da47f](https://github.com/HeyOmae/OMA3/commit/83da47f38bd6615b4b605844b37d6ae1e533bab0))
* ignore the shadowrun reference pdf ([ceaebd2](https://github.com/HeyOmae/OMA3/commit/ceaebd27940427b1e817888fd98e563e4726e2ff))
* update vscode settings ([1d4dd1b](https://github.com/HeyOmae/OMA3/commit/1d4dd1b09f41ed5a2ba1f8438c92ab827383c162))

## [3.14.0](https://github.com/HeyOmae/OMA3/compare/3.13.18...3.14.0) (2026-10-31)


### Features

* add google site verification meta tag ([873f794](https://github.com/HeyOmae/OMA3/commit/873f7941cf69a8785739a73b249300975cb744f4))


### Refactors

* replaced slice-spread pattern with toSpliced method ([4635567](https://github.com/HeyOmae/OMA3/commit/463556752d66abb699668ff9ce61bb34d7d17cf8))


### Maintenance

* update dependencies to latest ([55f4a4e](https://github.com/HeyOmae/OMA3/commit/55f4a4ecd90e730d0f94bf2aec79c40718bf472e))
