!function () {
    var e, t, o, n, r, a, i = {
        54098: function (e, t, o) {
            "use strict";
            o.d(t, {
                MQ: function () {
                    return r
                }, fz: function () {
                    return a
                }, rP: function () {
                    return n
                }
            });
            const n = "\n :root {\n--borderRadiusNone: 0;\n--borderRadiusSmall: 2px;\n--borderRadiusMedium: 4px;\n--borderRadiusLarge: 6px;\n--borderRadiusXLarge: 8px;\n--borderRadiusCircular: 10000px;\n--fontSizeBase100: 10px;\n--fontSizeBase200: 12px;\n--fontSizeBase300: 14px;\n--fontSizeBase400: 16px;\n--fontSizeBase500: 20px;\n--fontSizeBase600: 24px;\n--fontSizeHero700: 28px;\n--fontSizeHero800: 32px;\n--fontSizeHero900: 40px;\n--fontSizeHero1000: 68px;\n--lineHeightBase100: 14px;\n--lineHeightBase200: 16px;\n--lineHeightBase300: 20px;\n--lineHeightBase400: 22px;\n--lineHeightBase500: 28px;\n--lineHeightBase600: 32px;\n--lineHeightHero700: 36px;\n--lineHeightHero800: 40px;\n--lineHeightHero900: 52px;\n--lineHeightHero1000: 92px;\n--fontFamilyBase: 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;\n--fontFamilyMonospace: Consolas, 'Courier New', Courier, monospace;\n--fontFamilyNumeric: Bahnschrift, 'Segoe UI', 'Segoe UI Web (West European)', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif;\n--fontWeightRegular: 400;\n--fontWeightMedium: 500;\n--fontWeightSemibold: 600;\n--fontWeightBold: 700;\n--strokeWidthThin: 1px;\n--strokeWidthThick: 2px;\n--strokeWidthThicker: 3px;\n--strokeWidthThickest: 4px;\n--spacingHorizontalNone: 0;\n--spacingHorizontalXXS: 2px;\n--spacingHorizontalXS: 4px;\n--spacingHorizontalSNudge: 6px;\n--spacingHorizontalS: 8px;\n--spacingHorizontalMNudge: 10px;\n--spacingHorizontalM: 12px;\n--spacingHorizontalL: 16px;\n--spacingHorizontalXL: 20px;\n--spacingHorizontalXXL: 24px;\n--spacingHorizontalXXXL: 32px;\n--spacingVerticalNone: 0;\n--spacingVerticalXXS: 2px;\n--spacingVerticalXS: 4px;\n--spacingVerticalSNudge: 6px;\n--spacingVerticalS: 8px;\n--spacingVerticalMNudge: 10px;\n--spacingVerticalM: 12px;\n--spacingVerticalL: 16px;\n--spacingVerticalXL: 20px;\n--spacingVerticalXXL: 24px;\n--spacingVerticalXXXL: 32px;\n--durationUltraFast: 50ms;\n--durationFaster: 100ms;\n--durationFast: 150ms;\n--durationNormal: 200ms;\n--durationGentle: 250ms;\n--durationSlow: 300ms;\n--durationSlower: 400ms;\n--durationUltraSlow: 500ms;\n--curveAccelerateMax: cubic-bezier(0.9,0.1,1,0.2);\n--curveAccelerateMid: cubic-bezier(1,0,1,1);\n--curveAccelerateMin: cubic-bezier(0.8,0,0.78,1);\n--curveDecelerateMax: cubic-bezier(0.1,0.9,0.2,1);\n--curveDecelerateMid: cubic-bezier(0,0,0,1);\n--curveDecelerateMin: cubic-bezier(0.33,0,0.1,1);\n--curveEasyEaseMax: cubic-bezier(0.8,0,0.2,1);\n--curveEasyEase: cubic-bezier(0.33,0,0.67,1);\n--curveLinear: cubic-bezier(0,0,1,1);\n--colorNeutralForegroundInvertedDisabled: rgba(255, 255, 255, 0.4);\n--colorNeutralForeground1Static: #242424;\n--colorNeutralForegroundStaticInverted: #ffffff;\n--colorNeutralForegroundOnBrand: #ffffff;\n--colorNeutralForegroundInvertedLink: #ffffff;\n--colorNeutralForegroundInvertedLinkHover: #ffffff;\n--colorNeutralForegroundInvertedLinkPressed: #ffffff;\n--colorNeutralForegroundInvertedLinkSelected: #ffffff;\n--colorBrandForegroundOnLight: #0f6cbd;\n--colorBrandForegroundOnLightHover: #115ea3;\n--colorBrandForegroundOnLightPressed: #0e4775;\n--colorBrandForegroundOnLightSelected: #0f548c;\n--colorSubtleBackground: transparent;\n--colorSubtleBackgroundLightAlphaSelected: transparent;\n--colorSubtleBackgroundInverted: transparent;\n--colorSubtleBackgroundInvertedHover: rgba(0, 0, 0, 0.1);\n--colorSubtleBackgroundInvertedPressed: rgba(0, 0, 0, 0.3);\n--colorSubtleBackgroundInvertedSelected: rgba(0, 0, 0, 0.2);\n--colorTransparentBackground: transparent;\n--colorTransparentBackgroundHover: transparent;\n--colorTransparentBackgroundPressed: transparent;\n--colorTransparentBackgroundSelected: transparent;\n--colorNeutralBackgroundInvertedDisabled: rgba(255, 255, 255, 0.1);\n--colorBrandBackgroundPressed: #0c3b5e;\n--colorBrandBackgroundSelected: #0f548c;\n--colorBrandBackgroundStatic: #0f6cbd;\n--colorBrandBackgroundInverted: #ffffff;\n--colorBrandBackgroundInvertedHover: #ebf3fc;\n--colorBrandBackgroundInvertedPressed: #b4d6fa;\n--colorBrandBackgroundInvertedSelected: #cfe4fa;\n--colorNeutralStrokeOnBrand2: #ffffff;\n--colorNeutralStrokeOnBrand2Hover: #ffffff;\n--colorNeutralStrokeOnBrand2Pressed: #ffffff;\n--colorNeutralStrokeOnBrand2Selected: #ffffff;\n--colorNeutralStrokeInvertedDisabled: rgba(255, 255, 255, 0.4);\n--colorTransparentStroke: transparent;\n--colorTransparentStrokeInteractive: transparent;\n--colorTransparentStrokeDisabled: transparent;\n--colorNeutralStrokeAlpha2: rgba(255, 255, 255, 0.2);\n--colorBrandShadowAmbient: rgba(0,0,0,0.30);\n--colorBrandShadowKey: rgba(0,0,0,0.25);\n--colorPaletteRedBackground3: #d13438;\n--colorPaletteGreenBackground3: #107c10;\n--colorPaletteDarkOrangeBackground3: #da3b01;\n--colorPaletteYellowBackground3: #fde300;\n--colorPaletteBerryBackground3: #c239b3;\n--colorPaletteLightGreenBackground3: #13a10e;\n--colorPaletteMarigoldBackground3: #eaa300;\n--colorStatusSuccessBackground3: #107c10;\n--colorStatusWarningBackground3: #f7630c;\n--colorStatusDangerBackground3: #c50f1f;\n--shadow2Brand: 0 0 2px rgba(0,0,0,0.30), 0 1px 2px rgba(0,0,0,0.25);\n--shadow4Brand: 0 0 2px rgba(0,0,0,0.30), 0 2px 4px rgba(0,0,0,0.25);\n--shadow8Brand: 0 0 2px rgba(0,0,0,0.30), 0 4px 8px rgba(0,0,0,0.25);\n--shadow16Brand: 0 0 2px rgba(0,0,0,0.30), 0 8px 16px rgba(0,0,0,0.25);\n--shadow28Brand: 0 0 8px rgba(0,0,0,0.30), 0 14px 28px rgba(0,0,0,0.25);\n--shadow64Brand: 0 0 8px rgba(0,0,0,0.30), 0 32px 64px rgba(0,0,0,0.25);\n}\n\n",
                r = '\n fluent-design-system-provider[base-layer-luminance="0.23"], :host {\n--colorNeutralForeground1: #ffffff;\n--colorNeutralForeground1Hover: #ffffff;\n--colorNeutralForeground1Pressed: #ffffff;\n--colorNeutralForeground1Selected: #ffffff;\n--colorNeutralForeground2: #d6d6d6;\n--colorNeutralForeground2Hover: #ffffff;\n--colorNeutralForeground2Pressed: #ffffff;\n--colorNeutralForeground2Selected: #ffffff;\n--colorNeutralForeground2BrandHover: #479ef5;\n--colorNeutralForeground2BrandPressed: #2886de;\n--colorNeutralForeground2BrandSelected: #479ef5;\n--colorNeutralForeground3: #adadad;\n--colorNeutralForeground3Hover: #d6d6d6;\n--colorNeutralForeground3Pressed: #d6d6d6;\n--colorNeutralForeground3Selected: #d6d6d6;\n--colorNeutralForeground3BrandHover: #479ef5;\n--colorNeutralForeground3BrandPressed: #2886de;\n--colorNeutralForeground3BrandSelected: #479ef5;\n--colorNeutralForeground4: #999999;\n--colorNeutralForegroundDisabled: #5c5c5c;\n--colorBrandForegroundLink: #479ef5;\n--colorBrandForegroundLinkHover: #62abf5;\n--colorBrandForegroundLinkPressed: #2886de;\n--colorBrandForegroundLinkSelected: #479ef5;\n--colorNeutralForeground2Link: #d6d6d6;\n--colorNeutralForeground2LinkHover: #ffffff;\n--colorNeutralForeground2LinkPressed: #ffffff;\n--colorNeutralForeground2LinkSelected: #ffffff;\n--colorCompoundBrandForeground1: #479ef5;\n--colorCompoundBrandForeground1Hover: #62abf5;\n--colorCompoundBrandForeground1Pressed: #2886de;\n--colorBrandForeground1: #479ef5;\n--colorBrandForeground2: #62abf5;\n--colorBrandForeground2Hover: #96c6fa;\n--colorBrandForeground2Pressed: #ebf3fc;\n--colorNeutralForegroundInverted: #242424;\n--colorNeutralForegroundInvertedHover: #242424;\n--colorNeutralForegroundInvertedPressed: #242424;\n--colorNeutralForegroundInvertedSelected: #242424;\n--colorNeutralForegroundInverted2: #242424;\n--colorBrandForegroundInverted: #0f6cbd;\n--colorBrandForegroundInvertedHover: #115ea3;\n--colorBrandForegroundInvertedPressed: #0f548c;\n--colorNeutralBackground1: #292929;\n--colorNeutralBackground1Hover: #3d3d3d;\n--colorNeutralBackground1Pressed: #1f1f1f;\n--colorNeutralBackground1Selected: #383838;\n--colorNeutralBackground2: #1f1f1f;\n--colorNeutralBackground2Hover: #333333;\n--colorNeutralBackground2Pressed: #141414;\n--colorNeutralBackground2Selected: #2e2e2e;\n--colorNeutralBackground3: #141414;\n--colorNeutralBackground3Hover: #292929;\n--colorNeutralBackground3Pressed: #0a0a0a;\n--colorNeutralBackground3Selected: #242424;\n--colorNeutralBackground4: #0a0a0a;\n--colorNeutralBackground4Hover: #1f1f1f;\n--colorNeutralBackground4Pressed: #000000;\n--colorNeutralBackground4Selected: #1a1a1a;\n--colorNeutralBackground5: #000000;\n--colorNeutralBackground5Hover: #141414;\n--colorNeutralBackground5Pressed: #050505;\n--colorNeutralBackground5Selected: #0f0f0f;\n--colorNeutralBackground6: #333333;\n--colorNeutralBackgroundInverted: #ffffff;\n--colorNeutralBackgroundStatic: #3d3d3d;\n--colorNeutralBackgroundAlpha: rgba(26, 26, 26, 0.5);\n--colorNeutralBackgroundAlpha2: rgba(31, 31, 31, 0.7);\n--colorSubtleBackgroundHover: #383838;\n--colorSubtleBackgroundPressed: #2e2e2e;\n--colorSubtleBackgroundSelected: #333333;\n--colorSubtleBackgroundLightAlphaHover: rgba(36, 36, 36, 0.8);\n--colorSubtleBackgroundLightAlphaPressed: rgba(36, 36, 36, 0.5);\n--colorNeutralBackgroundDisabled: #141414;\n--colorNeutralStencil1: #575757;\n--colorNeutralStencil2: #333333;\n--colorNeutralStencil1Alpha: rgba(255, 255, 255, 0.1);\n--colorNeutralStencil2Alpha: rgba(255, 255, 255, 0.05);\n--colorBackgroundOverlay: rgba(0, 0, 0, 0.5);\n--colorScrollbarOverlay: rgba(255, 255, 255, 0.6);\n--colorBrandBackground: #115ea3;\n--colorBrandBackgroundHover: #0f6cbd;\n--colorCompoundBrandBackground: #479ef5;\n--colorCompoundBrandBackgroundHover: #62abf5;\n--colorCompoundBrandBackgroundPressed: #2886de;\n--colorBrandBackground2: #082338;\n--colorBrandBackground2Hover: #0c3b5e;\n--colorBrandBackground2Pressed: #061724;\n--colorNeutralStrokeAccessible: #adadad;\n--colorNeutralStrokeAccessibleHover: #bdbdbd;\n--colorNeutralStrokeAccessiblePressed: #b3b3b3;\n--colorNeutralStrokeAccessibleSelected: #479ef5;\n--colorNeutralStroke1: #666666;\n--colorNeutralStroke1Hover: #757575;\n--colorNeutralStroke1Pressed: #6b6b6b;\n--colorNeutralStroke1Selected: #707070;\n--colorNeutralStroke2: #525252;\n--colorNeutralStroke3: #3d3d3d;\n--colorNeutralStrokeSubtle: #0a0a0a;\n--colorNeutralStrokeOnBrand: #292929;\n--colorBrandStroke1: #479ef5;\n--colorBrandStroke2: #0e4775;\n--colorBrandStroke2Hover: #0e4775;\n--colorBrandStroke2Pressed: #0a2e4a;\n--colorBrandStroke2Contrast: #0e4775;\n--colorCompoundBrandStroke: #479ef5;\n--colorCompoundBrandStrokeHover: #62abf5;\n--colorCompoundBrandStrokePressed: #2886de;\n--colorNeutralStrokeDisabled: #424242;\n--colorNeutralStrokeAlpha: rgba(255, 255, 255, 0.1);\n--colorStrokeFocus1: #000000;\n--colorStrokeFocus2: #ffffff;\n--colorNeutralShadowAmbient: rgba(0,0,0,0.24);\n--colorNeutralShadowKey: rgba(0,0,0,0.28);\n--colorNeutralShadowAmbientLighter: rgba(0,0,0,0.12);\n--colorNeutralShadowKeyLighter: rgba(0,0,0,0.14);\n--colorNeutralShadowAmbientDarker: rgba(0,0,0,0.40);\n--colorNeutralShadowKeyDarker: rgba(0,0,0,0.48);\n--colorPaletteRedBackground1: #3f1011;\n--colorPaletteRedBackground2: #751d1f;\n--colorPaletteRedForeground1: #e37d80;\n--colorPaletteRedForeground2: #f1bbbc;\n--colorPaletteRedForeground3: #e37d80;\n--colorPaletteRedBorderActive: #e37d80;\n--colorPaletteRedBorder1: #d13438;\n--colorPaletteRedBorder2: #e37d80;\n--colorPaletteGreenBackground1: #052505;\n--colorPaletteGreenBackground2: #094509;\n--colorPaletteGreenForeground1: #54b054;\n--colorPaletteGreenForeground2: #9fd89f;\n--colorPaletteGreenForeground3: #9fd89f;\n--colorPaletteGreenBorderActive: #54b054;\n--colorPaletteGreenBorder1: #107c10;\n--colorPaletteGreenBorder2: #9fd89f;\n--colorPaletteDarkOrangeBackground1: #411200;\n--colorPaletteDarkOrangeBackground2: #7a2101;\n--colorPaletteDarkOrangeForeground1: #e9835e;\n--colorPaletteDarkOrangeForeground2: #f4bfab;\n--colorPaletteDarkOrangeForeground3: #e9835e;\n--colorPaletteDarkOrangeBorderActive: #e9835e;\n--colorPaletteDarkOrangeBorder1: #da3b01;\n--colorPaletteDarkOrangeBorder2: #e9835e;\n--colorPaletteYellowBackground1: #4c4400;\n--colorPaletteYellowBackground2: #817400;\n--colorPaletteYellowForeground1: #feee66;\n--colorPaletteYellowForeground2: #fef7b2;\n--colorPaletteYellowForeground3: #fdea3d;\n--colorPaletteYellowBorderActive: #feee66;\n--colorPaletteYellowBorder1: #fde300;\n--colorPaletteYellowBorder2: #fdea3d;\n--colorPaletteBerryBackground1: #3a1136;\n--colorPaletteBerryBackground2: #6d2064;\n--colorPaletteBerryForeground1: #da7ed0;\n--colorPaletteBerryForeground2: #edbbe7;\n--colorPaletteBerryForeground3: #d161c4;\n--colorPaletteBerryBorderActive: #da7ed0;\n--colorPaletteBerryBorder1: #c239b3;\n--colorPaletteBerryBorder2: #d161c4;\n--colorPaletteLightGreenBackground1: #063004;\n--colorPaletteLightGreenBackground2: #0b5a08;\n--colorPaletteLightGreenForeground1: #5ec75a;\n--colorPaletteLightGreenForeground2: #a7e3a5;\n--colorPaletteLightGreenForeground3: #3db838;\n--colorPaletteLightGreenBorderActive: #5ec75a;\n--colorPaletteLightGreenBorder1: #13a10e;\n--colorPaletteLightGreenBorder2: #3db838;\n--colorPaletteMarigoldBackground1: #463100;\n--colorPaletteMarigoldBackground2: #835b00;\n--colorPaletteMarigoldForeground1: #f2c661;\n--colorPaletteMarigoldForeground2: #f9e2ae;\n--colorPaletteMarigoldForeground3: #efb839;\n--colorPaletteMarigoldBorderActive: #f2c661;\n--colorPaletteMarigoldBorder1: #eaa300;\n--colorPaletteMarigoldBorder2: #efb839;\n--colorPaletteRedForegroundInverted: #d13438;\n--colorPaletteGreenForegroundInverted: #107c10;\n--colorPaletteYellowForegroundInverted: #817400;\n--colorPaletteDarkRedBackground2: #590815;\n--colorPaletteDarkRedForeground2: #d69ca5;\n--colorPaletteDarkRedBorderActive: #ac4f5e;\n--colorPaletteCranberryBackground2: #6e0811;\n--colorPaletteCranberryForeground2: #eeacb2;\n--colorPaletteCranberryBorderActive: #dc626d;\n--colorPalettePumpkinBackground2: #712d09;\n--colorPalettePumpkinForeground2: #efc4ad;\n--colorPalettePumpkinBorderActive: #df8e64;\n--colorPalettePeachBackground2: #8f4e00;\n--colorPalettePeachForeground2: #ffddb3;\n--colorPalettePeachBorderActive: #ffba66;\n--colorPaletteGoldBackground2: #6c5700;\n--colorPaletteGoldForeground2: #ecdfa5;\n--colorPaletteGoldBorderActive: #dac157;\n--colorPaletteBrassBackground2: #553e06;\n--colorPaletteBrassForeground2: #e0cea2;\n--colorPaletteBrassBorderActive: #c1a256;\n--colorPaletteBrownBackground2: #50301a;\n--colorPaletteBrownForeground2: #ddc3b0;\n--colorPaletteBrownBorderActive: #bb8f6f;\n--colorPaletteForestBackground2: #294903;\n--colorPaletteForestForeground2: #bdd99b;\n--colorPaletteForestBorderActive: #85b44c;\n--colorPaletteSeafoamBackground2: #00723b;\n--colorPaletteSeafoamForeground2: #a8f0cd;\n--colorPaletteSeafoamBorderActive: #5ae0a0;\n--colorPaletteDarkGreenBackground2: #063b06;\n--colorPaletteDarkGreenForeground2: #9ad29a;\n--colorPaletteDarkGreenBorderActive: #4da64d;\n--colorPaletteLightTealBackground2: #00666d;\n--colorPaletteLightTealForeground2: #a6e9ed;\n--colorPaletteLightTealBorderActive: #58d3db;\n--colorPaletteTealBackground2: #02494c;\n--colorPaletteTealForeground2: #9bd9db;\n--colorPaletteTealBorderActive: #4cb4b7;\n--colorPaletteSteelBackground2: #00333f;\n--colorPaletteSteelForeground2: #94c8d4;\n--colorPaletteSteelBorderActive: #4496a9;\n--colorPaletteBlueBackground2: #004377;\n--colorPaletteBlueForeground2: #a9d3f2;\n--colorPaletteBlueBorderActive: #5caae5;\n--colorPaletteRoyalBlueBackground2: #002c4e;\n--colorPaletteRoyalBlueForeground2: #9abfdc;\n--colorPaletteRoyalBlueBorderActive: #4a89ba;\n--colorPaletteCornflowerBackground2: #2c3c85;\n--colorPaletteCornflowerForeground2: #c8d1fa;\n--colorPaletteCornflowerBorderActive: #93a4f4;\n--colorPaletteNavyBackground2: #001665;\n--colorPaletteNavyForeground2: #a3b2e8;\n--colorPaletteNavyBorderActive: #546fd2;\n--colorPaletteLavenderBackground2: #3f3682;\n--colorPaletteLavenderForeground2: #d2ccf8;\n--colorPaletteLavenderBorderActive: #a79cf1;\n--colorPalettePurpleBackground2: #341a51;\n--colorPalettePurpleForeground2: #c6b1de;\n--colorPalettePurpleBorderActive: #9470bd;\n--colorPaletteGrapeBackground2: #4c0d55;\n--colorPaletteGrapeForeground2: #d9a7e0;\n--colorPaletteGrapeBorderActive: #b55fc1;\n--colorPaletteLilacBackground2: #63276d;\n--colorPaletteLilacForeground2: #e6bfed;\n--colorPaletteLilacBorderActive: #cf87da;\n--colorPalettePinkBackground2: #80215d;\n--colorPalettePinkForeground2: #f7c0e3;\n--colorPalettePinkBorderActive: #ef85c8;\n--colorPaletteMagentaBackground2: #6b0043;\n--colorPaletteMagentaForeground2: #eca5d1;\n--colorPaletteMagentaBorderActive: #d957a8;\n--colorPalettePlumBackground2: #5a003b;\n--colorPalettePlumForeground2: #d696c0;\n--colorPalettePlumBorderActive: #ad4589;\n--colorPaletteBeigeBackground2: #444241;\n--colorPaletteBeigeForeground2: #d7d4d4;\n--colorPaletteBeigeBorderActive: #afabaa;\n--colorPaletteMinkBackground2: #343231;\n--colorPaletteMinkForeground2: #cecccb;\n--colorPaletteMinkBorderActive: #9e9b99;\n--colorPalettePlatinumBackground2: #3b4447;\n--colorPalettePlatinumForeground2: #cdd6d8;\n--colorPalettePlatinumBorderActive: #a0adb2;\n--colorPaletteAnchorBackground2: #202427;\n--colorPaletteAnchorForeground2: #bcc3c7;\n--colorPaletteAnchorBorderActive: #808a90;\n--colorStatusSuccessBackground1: #052505;\n--colorStatusSuccessBackground2: #094509;\n--colorStatusSuccessForeground1: #54b054;\n--colorStatusSuccessForeground2: #9fd89f;\n--colorStatusSuccessForeground3: #9fd89f;\n--colorStatusSuccessBorderActive: #54b054;\n--colorStatusSuccessForegroundInverted: #0e700e;\n--colorStatusSuccessBorder1: #107c10;\n--colorStatusSuccessBorder2: #9fd89f;\n--colorStatusWarningBackground1: #4a1e04;\n--colorStatusWarningBackground2: #8a3707;\n--colorStatusWarningForeground1: #faa06b;\n--colorStatusWarningForeground2: #fdcfb4;\n--colorStatusWarningForeground3: #f98845;\n--colorStatusWarningBorderActive: #faa06b;\n--colorStatusWarningForegroundInverted: #bc4b09;\n--colorStatusWarningBorder1: #f7630c;\n--colorStatusWarningBorder2: #f98845;\n--colorStatusDangerBackground1: #3b0509;\n--colorStatusDangerBackground2: #6e0811;\n--colorStatusDangerForeground1: #dc626d;\n--colorStatusDangerForeground2: #eeacb2;\n--colorStatusDangerForeground3: #dc626d;\n--colorStatusDangerBorderActive: #dc626d;\n--colorStatusDangerForegroundInverted: #b10e1c;\n--colorStatusDangerBorder1: #c50f1f;\n--colorStatusDangerBorder2: #dc626d;\n--shadow2: 0 0 2px rgba(0,0,0,0.24), 0 1px 2px rgba(0,0,0,0.28);\n--shadow4: 0 0 2px rgba(0,0,0,0.24), 0 2px 4px rgba(0,0,0,0.28);\n--shadow8: 0 0 2px rgba(0,0,0,0.24), 0 4px 8px rgba(0,0,0,0.28);\n--shadow16: 0 0 2px rgba(0,0,0,0.24), 0 8px 16px rgba(0,0,0,0.28);\n--shadow28: 0 0 8px rgba(0,0,0,0.24), 0 14px 28px rgba(0,0,0,0.28);\n--shadow64: 0 0 8px rgba(0,0,0,0.24), 0 32px 64px rgba(0,0,0,0.28);\n}\n\n',
                a = '\n fluent-design-system-provider[base-layer-luminance="1"], :host {\n--colorNeutralForeground1: #242424;\n--colorNeutralForeground1Hover: #242424;\n--colorNeutralForeground1Pressed: #242424;\n--colorNeutralForeground1Selected: #242424;\n--colorNeutralForeground2: #424242;\n--colorNeutralForeground2Hover: #242424;\n--colorNeutralForeground2Pressed: #242424;\n--colorNeutralForeground2Selected: #242424;\n--colorNeutralForeground2BrandHover: #0f6cbd;\n--colorNeutralForeground2BrandPressed: #115ea3;\n--colorNeutralForeground2BrandSelected: #0f6cbd;\n--colorNeutralForeground3: #616161;\n--colorNeutralForeground3Hover: #424242;\n--colorNeutralForeground3Pressed: #424242;\n--colorNeutralForeground3Selected: #424242;\n--colorNeutralForeground3BrandHover: #0f6cbd;\n--colorNeutralForeground3BrandPressed: #115ea3;\n--colorNeutralForeground3BrandSelected: #0f6cbd;\n--colorNeutralForeground4: #707070;\n--colorNeutralForegroundDisabled: #bdbdbd;\n--colorBrandForegroundLink: #115ea3;\n--colorBrandForegroundLinkHover: #0f548c;\n--colorBrandForegroundLinkPressed: #0c3b5e;\n--colorBrandForegroundLinkSelected: #115ea3;\n--colorNeutralForeground2Link: #424242;\n--colorNeutralForeground2LinkHover: #242424;\n--colorNeutralForeground2LinkPressed: #242424;\n--colorNeutralForeground2LinkSelected: #242424;\n--colorCompoundBrandForeground1: #0f6cbd;\n--colorCompoundBrandForeground1Hover: #115ea3;\n--colorCompoundBrandForeground1Pressed: #0f548c;\n--colorBrandForeground1: #0f6cbd;\n--colorBrandForeground2: #115ea3;\n--colorBrandForeground2Hover: #0f548c;\n--colorBrandForeground2Pressed: #0a2e4a;\n--colorNeutralForegroundInverted: #ffffff;\n--colorNeutralForegroundInvertedHover: #ffffff;\n--colorNeutralForegroundInvertedPressed: #ffffff;\n--colorNeutralForegroundInvertedSelected: #ffffff;\n--colorNeutralForegroundInverted2: #ffffff;\n--colorBrandForegroundInverted: #479ef5;\n--colorBrandForegroundInvertedHover: #62abf5;\n--colorBrandForegroundInvertedPressed: #479ef5;\n--colorNeutralBackground1: #ffffff;\n--colorNeutralBackground1Hover: #f5f5f5;\n--colorNeutralBackground1Pressed: #e0e0e0;\n--colorNeutralBackground1Selected: #ebebeb;\n--colorNeutralBackground2: #fafafa;\n--colorNeutralBackground2Hover: #f0f0f0;\n--colorNeutralBackground2Pressed: #dbdbdb;\n--colorNeutralBackground2Selected: #e6e6e6;\n--colorNeutralBackground3: #f5f5f5;\n--colorNeutralBackground3Hover: #ebebeb;\n--colorNeutralBackground3Pressed: #d6d6d6;\n--colorNeutralBackground3Selected: #e0e0e0;\n--colorNeutralBackground4: #f0f0f0;\n--colorNeutralBackground4Hover: #fafafa;\n--colorNeutralBackground4Pressed: #f5f5f5;\n--colorNeutralBackground4Selected: #ffffff;\n--colorNeutralBackground5: #ebebeb;\n--colorNeutralBackground5Hover: #f5f5f5;\n--colorNeutralBackground5Pressed: #f0f0f0;\n--colorNeutralBackground5Selected: #fafafa;\n--colorNeutralBackground6: #e6e6e6;\n--colorNeutralBackgroundInverted: #292929;\n--colorNeutralBackgroundStatic: #333333;\n--colorNeutralBackgroundAlpha: rgba(255, 255, 255, 0.5);\n--colorNeutralBackgroundAlpha2: rgba(255, 255, 255, 0.8);\n--colorSubtleBackgroundHover: #f5f5f5;\n--colorSubtleBackgroundPressed: #e0e0e0;\n--colorSubtleBackgroundSelected: #ebebeb;\n--colorSubtleBackgroundLightAlphaHover: rgba(255, 255, 255, 0.7);\n--colorSubtleBackgroundLightAlphaPressed: rgba(255, 255, 255, 0.5);\n--colorNeutralBackgroundDisabled: #f0f0f0;\n--colorNeutralStencil1: #e6e6e6;\n--colorNeutralStencil2: #fafafa;\n--colorNeutralStencil1Alpha: rgba(0, 0, 0, 0.1);\n--colorNeutralStencil2Alpha: rgba(0, 0, 0, 0.05);\n--colorBackgroundOverlay: rgba(0, 0, 0, 0.4);\n--colorScrollbarOverlay: rgba(0, 0, 0, 0.5);\n--colorBrandBackground: #0f6cbd;\n--colorBrandBackgroundHover: #115ea3;\n--colorCompoundBrandBackground: #0f6cbd;\n--colorCompoundBrandBackgroundHover: #115ea3;\n--colorCompoundBrandBackgroundPressed: #0f548c;\n--colorBrandBackground2: #ebf3fc;\n--colorBrandBackground2Hover: #cfe4fa;\n--colorBrandBackground2Pressed: #96c6fa;\n--colorNeutralStrokeAccessible: #616161;\n--colorNeutralStrokeAccessibleHover: #575757;\n--colorNeutralStrokeAccessiblePressed: #4d4d4d;\n--colorNeutralStrokeAccessibleSelected: #0f6cbd;\n--colorNeutralStroke1: #d1d1d1;\n--colorNeutralStroke1Hover: #c7c7c7;\n--colorNeutralStroke1Pressed: #b3b3b3;\n--colorNeutralStroke1Selected: #bdbdbd;\n--colorNeutralStroke2: #e0e0e0;\n--colorNeutralStroke3: #f0f0f0;\n--colorNeutralStrokeSubtle: #e0e0e0;\n--colorNeutralStrokeOnBrand: #ffffff;\n--colorBrandStroke1: #0f6cbd;\n--colorBrandStroke2: #b4d6fa;\n--colorBrandStroke2Hover: #77b7f7;\n--colorBrandStroke2Pressed: #0f6cbd;\n--colorBrandStroke2Contrast: #b4d6fa;\n--colorCompoundBrandStroke: #0f6cbd;\n--colorCompoundBrandStrokeHover: #115ea3;\n--colorCompoundBrandStrokePressed: #0f548c;\n--colorNeutralStrokeDisabled: #e0e0e0;\n--colorNeutralStrokeAlpha: rgba(0, 0, 0, 0.05);\n--colorStrokeFocus1: #ffffff;\n--colorStrokeFocus2: #000000;\n--colorNeutralShadowAmbient: rgba(0,0,0,0.12);\n--colorNeutralShadowKey: rgba(0,0,0,0.14);\n--colorNeutralShadowAmbientLighter: rgba(0,0,0,0.06);\n--colorNeutralShadowKeyLighter: rgba(0,0,0,0.07);\n--colorNeutralShadowAmbientDarker: rgba(0,0,0,0.20);\n--colorNeutralShadowKeyDarker: rgba(0,0,0,0.24);\n--colorPaletteRedBackground1: #fdf6f6;\n--colorPaletteRedBackground2: #f1bbbc;\n--colorPaletteRedForeground1: #bc2f32;\n--colorPaletteRedForeground2: #751d1f;\n--colorPaletteRedForeground3: #d13438;\n--colorPaletteRedBorderActive: #d13438;\n--colorPaletteRedBorder1: #f1bbbc;\n--colorPaletteRedBorder2: #d13438;\n--colorPaletteGreenBackground1: #f1faf1;\n--colorPaletteGreenBackground2: #9fd89f;\n--colorPaletteGreenForeground1: #0e700e;\n--colorPaletteGreenForeground2: #094509;\n--colorPaletteGreenForeground3: #107c10;\n--colorPaletteGreenBorderActive: #107c10;\n--colorPaletteGreenBorder1: #9fd89f;\n--colorPaletteGreenBorder2: #107c10;\n--colorPaletteDarkOrangeBackground1: #fdf6f3;\n--colorPaletteDarkOrangeBackground2: #f4bfab;\n--colorPaletteDarkOrangeForeground1: #c43501;\n--colorPaletteDarkOrangeForeground2: #7a2101;\n--colorPaletteDarkOrangeForeground3: #da3b01;\n--colorPaletteDarkOrangeBorderActive: #da3b01;\n--colorPaletteDarkOrangeBorder1: #f4bfab;\n--colorPaletteDarkOrangeBorder2: #da3b01;\n--colorPaletteYellowBackground1: #fffef5;\n--colorPaletteYellowBackground2: #fef7b2;\n--colorPaletteYellowForeground1: #817400;\n--colorPaletteYellowForeground2: #817400;\n--colorPaletteYellowForeground3: #fde300;\n--colorPaletteYellowBorderActive: #fde300;\n--colorPaletteYellowBorder1: #fef7b2;\n--colorPaletteYellowBorder2: #fde300;\n--colorPaletteBerryBackground1: #fdf5fc;\n--colorPaletteBerryBackground2: #edbbe7;\n--colorPaletteBerryForeground1: #af33a1;\n--colorPaletteBerryForeground2: #6d2064;\n--colorPaletteBerryForeground3: #c239b3;\n--colorPaletteBerryBorderActive: #c239b3;\n--colorPaletteBerryBorder1: #edbbe7;\n--colorPaletteBerryBorder2: #c239b3;\n--colorPaletteLightGreenBackground1: #f2fbf2;\n--colorPaletteLightGreenBackground2: #a7e3a5;\n--colorPaletteLightGreenForeground1: #11910d;\n--colorPaletteLightGreenForeground2: #0b5a08;\n--colorPaletteLightGreenForeground3: #13a10e;\n--colorPaletteLightGreenBorderActive: #13a10e;\n--colorPaletteLightGreenBorder1: #a7e3a5;\n--colorPaletteLightGreenBorder2: #13a10e;\n--colorPaletteMarigoldBackground1: #fefbf4;\n--colorPaletteMarigoldBackground2: #f9e2ae;\n--colorPaletteMarigoldForeground1: #d39300;\n--colorPaletteMarigoldForeground2: #835b00;\n--colorPaletteMarigoldForeground3: #eaa300;\n--colorPaletteMarigoldBorderActive: #eaa300;\n--colorPaletteMarigoldBorder1: #f9e2ae;\n--colorPaletteMarigoldBorder2: #eaa300;\n--colorPaletteRedForegroundInverted: #dc5e62;\n--colorPaletteGreenForegroundInverted: #359b35;\n--colorPaletteYellowForegroundInverted: #fef7b2;\n--colorPaletteDarkRedBackground2: #d69ca5;\n--colorPaletteDarkRedForeground2: #420610;\n--colorPaletteDarkRedBorderActive: #750b1c;\n--colorPaletteCranberryBackground2: #eeacb2;\n--colorPaletteCranberryForeground2: #6e0811;\n--colorPaletteCranberryBorderActive: #c50f1f;\n--colorPalettePumpkinBackground2: #efc4ad;\n--colorPalettePumpkinForeground2: #712d09;\n--colorPalettePumpkinBorderActive: #ca5010;\n--colorPalettePeachBackground2: #ffddb3;\n--colorPalettePeachForeground2: #8f4e00;\n--colorPalettePeachBorderActive: #ff8c00;\n--colorPaletteGoldBackground2: #ecdfa5;\n--colorPaletteGoldForeground2: #6c5700;\n--colorPaletteGoldBorderActive: #c19c00;\n--colorPaletteBrassBackground2: #e0cea2;\n--colorPaletteBrassForeground2: #553e06;\n--colorPaletteBrassBorderActive: #986f0b;\n--colorPaletteBrownBackground2: #ddc3b0;\n--colorPaletteBrownForeground2: #50301a;\n--colorPaletteBrownBorderActive: #8e562e;\n--colorPaletteForestBackground2: #bdd99b;\n--colorPaletteForestForeground2: #294903;\n--colorPaletteForestBorderActive: #498205;\n--colorPaletteSeafoamBackground2: #a8f0cd;\n--colorPaletteSeafoamForeground2: #00723b;\n--colorPaletteSeafoamBorderActive: #00cc6a;\n--colorPaletteDarkGreenBackground2: #9ad29a;\n--colorPaletteDarkGreenForeground2: #063b06;\n--colorPaletteDarkGreenBorderActive: #0b6a0b;\n--colorPaletteLightTealBackground2: #a6e9ed;\n--colorPaletteLightTealForeground2: #00666d;\n--colorPaletteLightTealBorderActive: #00b7c3;\n--colorPaletteTealBackground2: #9bd9db;\n--colorPaletteTealForeground2: #02494c;\n--colorPaletteTealBorderActive: #038387;\n--colorPaletteSteelBackground2: #94c8d4;\n--colorPaletteSteelForeground2: #00333f;\n--colorPaletteSteelBorderActive: #005b70;\n--colorPaletteBlueBackground2: #a9d3f2;\n--colorPaletteBlueForeground2: #004377;\n--colorPaletteBlueBorderActive: #0078d4;\n--colorPaletteRoyalBlueBackground2: #9abfdc;\n--colorPaletteRoyalBlueForeground2: #002c4e;\n--colorPaletteRoyalBlueBorderActive: #004e8c;\n--colorPaletteCornflowerBackground2: #c8d1fa;\n--colorPaletteCornflowerForeground2: #2c3c85;\n--colorPaletteCornflowerBorderActive: #4f6bed;\n--colorPaletteNavyBackground2: #a3b2e8;\n--colorPaletteNavyForeground2: #001665;\n--colorPaletteNavyBorderActive: #0027b4;\n--colorPaletteLavenderBackground2: #d2ccf8;\n--colorPaletteLavenderForeground2: #3f3682;\n--colorPaletteLavenderBorderActive: #7160e8;\n--colorPalettePurpleBackground2: #c6b1de;\n--colorPalettePurpleForeground2: #341a51;\n--colorPalettePurpleBorderActive: #5c2e91;\n--colorPaletteGrapeBackground2: #d9a7e0;\n--colorPaletteGrapeForeground2: #4c0d55;\n--colorPaletteGrapeBorderActive: #881798;\n--colorPaletteLilacBackground2: #e6bfed;\n--colorPaletteLilacForeground2: #63276d;\n--colorPaletteLilacBorderActive: #b146c2;\n--colorPalettePinkBackground2: #f7c0e3;\n--colorPalettePinkForeground2: #80215d;\n--colorPalettePinkBorderActive: #e43ba6;\n--colorPaletteMagentaBackground2: #eca5d1;\n--colorPaletteMagentaForeground2: #6b0043;\n--colorPaletteMagentaBorderActive: #bf0077;\n--colorPalettePlumBackground2: #d696c0;\n--colorPalettePlumForeground2: #43002b;\n--colorPalettePlumBorderActive: #77004d;\n--colorPaletteBeigeBackground2: #d7d4d4;\n--colorPaletteBeigeForeground2: #444241;\n--colorPaletteBeigeBorderActive: #7a7574;\n--colorPaletteMinkBackground2: #cecccb;\n--colorPaletteMinkForeground2: #343231;\n--colorPaletteMinkBorderActive: #5d5a58;\n--colorPalettePlatinumBackground2: #cdd6d8;\n--colorPalettePlatinumForeground2: #3b4447;\n--colorPalettePlatinumBorderActive: #69797e;\n--colorPaletteAnchorBackground2: #bcc3c7;\n--colorPaletteAnchorForeground2: #202427;\n--colorPaletteAnchorBorderActive: #394146;\n--colorStatusSuccessBackground1: #f1faf1;\n--colorStatusSuccessBackground2: #9fd89f;\n--colorStatusSuccessForeground1: #0e700e;\n--colorStatusSuccessForeground2: #094509;\n--colorStatusSuccessForeground3: #107c10;\n--colorStatusSuccessBorderActive: #107c10;\n--colorStatusSuccessForegroundInverted: #54b054;\n--colorStatusSuccessBorder1: #9fd89f;\n--colorStatusSuccessBorder2: #107c10;\n--colorStatusWarningBackground1: #fff9f5;\n--colorStatusWarningBackground2: #fdcfb4;\n--colorStatusWarningForeground1: #bc4b09;\n--colorStatusWarningForeground2: #8a3707;\n--colorStatusWarningForeground3: #bc4b09;\n--colorStatusWarningBorderActive: #f7630c;\n--colorStatusWarningForegroundInverted: #faa06b;\n--colorStatusWarningBorder1: #fdcfb4;\n--colorStatusWarningBorder2: #bc4b09;\n--colorStatusDangerBackground1: #fdf3f4;\n--colorStatusDangerBackground2: #eeacb2;\n--colorStatusDangerForeground1: #b10e1c;\n--colorStatusDangerForeground2: #6e0811;\n--colorStatusDangerForeground3: #c50f1f;\n--colorStatusDangerBorderActive: #c50f1f;\n--colorStatusDangerForegroundInverted: #dc626d;\n--colorStatusDangerBorder1: #eeacb2;\n--colorStatusDangerBorder2: #c50f1f;\n--shadow2: 0 0 2px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.14);\n--shadow4: 0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.14);\n--shadow8: 0 0 2px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.14);\n--shadow16: 0 0 2px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14);\n--shadow28: 0 0 8px rgba(0,0,0,0.12), 0 14px 28px rgba(0,0,0,0.14);\n--shadow64: 0 0 8px rgba(0,0,0,0.12), 0 32px 64px rgba(0,0,0,0.14);\n}\n\n'
        }, 61514: function (e, t, o) {
            "use strict";
            o.d(t, {
                BO: function () {
                    return d
                }, i: function () {
                    return s
                }, ov: function () {
                    return c
                }
            });
            var n = o(54098);
            let r, a = !1, i = !1;
            const s = () => {
                if (a) return;
                const e = new CSSStyleSheet;
                if (e.insertRule(n.rP), e.insertRule(n.MQ), e.insertRule(n.fz), Array.isArray(document.adoptedStyleSheets)) r = new CSSStyleSheet, document.adoptedStyleSheets = [...document.adoptedStyleSheets, e, r]; else {
                    const e = document.createElement("style");
                    if (!e) return;
                    document.head.appendChild(e), r = e.sheet
                }
                a = !0
            }, c = e => {
                i = e
            }, d = () => i
        }, 23865: function (e, t, o) {
            "use strict";
            o.d(t, {
                S: function () {
                    return M
                }
            });
            var n = o(33940), r = o(65175), a = o(63070), i = o(39001), s = o(22390), c = o(44886), d = o(40924);
            var l = o(28904), p = o(99452), u = o(42590), m = o(94537), g = o(93590), h = o(78460), f = o(37802);

            class b extends l.H {
                constructor() {
                    super(...arguments), this.useFastAnchoredRegion = !0, this.useDetailPageStyles = !1, this.fixedPosition = !1, this.defaultVerticalPosition = "bottom", this.defaultHorizontalPosition = "end", this.autoFocus = !0, this.zoomFactor = 1, this.isUpdatingPosition = !1, this.isBingHp = "bingHomepage" === g.jG.AppType, this.isViews = "views" === g.jG.AppType, this.fixedParentSpace = !1, this.keyDownHandler = e => (e.key === m.CX ? (this.referrerButton && this.referrerButton.focus(), this.$emit("dismiss-menu"), e.stopPropagation()) : e.key === m.oM && (this.customTabEventHandler ? this.customTabEventHandler(this, e) : this.tabEventHandler(e)), !0), this.updatePositionManually = () => {
                        this.updatePosition()
                    }, this.tabEventHandler = e => {
                        if (this.fluentMenu) {
                            const t = this.fluentMenu.children.length, o = e.target;
                            Array.from(this.fluentMenu.children).map(((n, r) => {
                                if (n === o) {
                                    const o = (r + (e.shiftKey ? -1 : 1) + t) % t;
                                    this.fluentMenu.children[o].focus()
                                }
                            }))
                        }
                    }, this.initMenuPositioning = () => {
                        this.setMenuPosition(), document.addEventListener("scroll", this.updatePosition), window.addEventListener("resize", this.updatePosition)
                    }, this.setMenuPosition = () => {
                        var e;
                        const t = this.referrerButton.getBoundingClientRect(), o = t.top * this.zoomFactor,
                            n = t.bottom * this.zoomFactor,
                            r = (null === (e = this.offsetParent) || void 0 === e ? void 0 : e.offsetTop) || 0;
                        let a = 0;
                        this.isBingHp && (a = this.offsetParent.getBoundingClientRect().top + window.scrollY);
                        let i = 0;
                        if (this.isViews && (i = this.offsetParent.getBoundingClientRect().top + window.scrollY - r), this.fluentMenu) {
                            let e;
                            e = "top" === this.defaultVerticalPosition ? `top:${o + window.scrollY - 2 - this.fluentMenu.clientHeight - r}px;` : n + this.fluentMenu.clientHeight > window.innerHeight ? `top:${o + window.scrollY - 2 - this.fluentMenu.clientHeight - r - a - i}px;` : `top:${n + window.scrollY + 1 - r - a - i}px;`, this.setAttribute("style", `position:absolute;${e}${this.getHorizontalPosition(t)}`), this.isUpdatingPosition = !1
                        }
                        this.useDetailPageStyles && (this.setAttribute("style", `position:absolute;top:${t.top + window.scrollY}px;${this.getHorizontalPosition(t)}`), this.isUpdatingPosition = !1)
                    }, this.updatePosition = (0, f.Z)((() => {
                        this.isUpdatingPosition || (window.requestAnimationFrame((() => {
                            this.setMenuPosition()
                        })), this.isUpdatingPosition = !0)
                    }), 300)
                }

                connectedCallback() {
                    super.connectedCallback(), this.isDarkMode = h.k.appInDarkMode(), this.fluentMenu && (this.useFastAnchoredRegion || this.initMenuPositioning(), this.autoFocus && this.fluentMenu && (window.setTimeout((() => {
                        this.fluentMenu.children[0].focus()
                    }), 100), this.$emit("shown-menu")))
                }

                disconnectedCallback() {
                    super.disconnectedCallback(), this.useFastAnchoredRegion || (document.removeEventListener("scroll", this.updatePosition), window.removeEventListener("resize", this.updatePosition))
                }

                getHorizontalPosition(e) {
                    const t = document.documentElement.clientWidth, o = e.right * this.zoomFactor,
                        n = e.left * this.zoomFactor,
                        r = this.fixedParentSpace ? this.offsetParent.getBoundingClientRect() : null;
                    if ("rtl" === document.dir || "start" === this.defaultHorizontalPosition) {
                        let e = 0;
                        if (this.isViews) {
                            const {left: o = 0, width: n = 0} = this.offsetParent.getBoundingClientRect() || {};
                            e = t - o - n
                        }
                        return this.useDetailPageStyles ? `right:${t - o - e - (r ? r.right - r.width : 0) - 245}px;` : t - o + this.fluentMenu.clientWidth <= window.innerWidth ? `right:${t - o - e - (r ? r.right - r.width : 0)}px` : `left:${n - ((null == r ? void 0 : r.left) ?? 0)}px;`
                    }
                    let a = 0;
                    return this.isViews && (a = this.offsetParent.getBoundingClientRect().left), this.useDetailPageStyles ? `left:${n - a - ((null == r ? void 0 : r.left) ?? 0) - 245}px;` : n + this.fluentMenu.clientWidth <= window.innerWidth ? `left:${n - a - ((null == r ? void 0 : r.left) ?? 0)}px;` : `right:${t - o - (r ? r.right - r.width : 0)}px;`
                }
            }

            (0, n.gn)([p.LO], b.prototype, "menuItems", void 0), (0, n.gn)([p.LO], b.prototype, "isDarkMode", void 0), (0, n.gn)([p.LO], b.prototype, "referrerButton", void 0), (0, n.gn)([p.LO], b.prototype, "useFastAnchoredRegion", void 0), (0, n.gn)([p.LO], b.prototype, "useDetailPageStyles", void 0), (0, n.gn)([(0, u.Lj)({mode: "boolean"})], b.prototype, "fixedPosition", void 0), (0, n.gn)([u.Lj], b.prototype, "defaultVerticalPosition", void 0), (0, n.gn)([u.Lj], b.prototype, "defaultHorizontalPosition", void 0), (0, n.gn)([(0, u.Lj)({mode: "boolean"})], b.prototype, "autoFocus", void 0), (0, n.gn)([(0, u.Lj)({mode: "boolean"})], b.prototype, "isWindowsDashboard", void 0), (0, n.gn)([u.Lj], b.prototype, "zoomFactor", void 0), (0, n.gn)([p.LO], b.prototype, "isGlyphUrlsPicture", void 0), (0, n.gn)([p.LO], b.prototype, "fixedParentSpace", void 0);
            var v = o(78923), x = o(80260), y = o(42689), _ = o(28632), w = o(35680);
            const S = v.i` .menu.detail-page{background:#424242;border-radius:6px}.menu.detail-page fluent-menu-item,.menu.detail-page fluent-menu-item:hover{background:transparent;color:${x.Qp};fill:${x.Qp}}.item-selected{font-weight:600;border-radius:4px;border-left-color:var(--accent-fill-focus);border-left-width:5px;background:var(--neutral-fill-active)}@media (prefers-color-scheme:dark){.menu.detail-page{background:#424242;border-radius:6px}.menu.detail-page fluent-menu-item,.menu.detail-page fluent-menu-item:hover{background:transparent;color:${y.C};fill:${y.C}}}`,
                k = v.i` ${S} :host{z-index:var(--menu-z-index,700);--control-corner-radius:4}:host(:focus){outline:none}:host([isWindowsDashboard]){--control-corner-radius:8}fluent-menu{box-shadow:0 2.4px 7.2px rgba(0,0,0,0.18),0 12.8px 28.8px rgba(0,0,0,0.22);max-width:var(--menu-max-width,275px);min-width:var(--menu-min-width,240px)}fluent-anchored-region{z-index:700}svg{fill:currentColor}.icon{align-items:center;display:flex}.rotate-icon-down svg{-ms-transform:rotate(180deg);transform:rotate(180deg)}:host(:focus){outline:none}fluent-menu-item::part(content){width:100%;overflow:none}.menu-item{grid-template-columns:minmax(32px,auto) 1fr minmax(32px,auto)}.menu-item-divider{margin-bottom:6px;border-top-color:${_.c1}}.menu-item-text{padding-inline-start:12px;opacity:0.786;font-size:12px}.menu-item-skeleton{height:32px;display:grid;grid-template-columns:minmax(32px,auto) 1fr;margin:0 calc(var(--design-unit) * 2px) 0 calc(var(--design-unit) * 1px);place-items:center;cursor:wait;forced-color-adjust:none;--skeleton-fill:${w.Gy};--skeleton-fill-shimmer:${w.Xi};--skeleton-animation-gradient:linear-gradient(270deg,var(--skeleton-fill) 0%,var(--skeleton-fill-shimmer) 51.13%,var(--skeleton-fill) 100%)}`;
            var C = o(49218), P = o(93703), T = o(41472), B = o(54256), A = o(89150);
            const I = C.dy`<div class="menu-item-skeleton" role="presentation"><fluent-skeleton style="height: 20px; width: 20px;" shape="circle" shimmer></fluent-skeleton><fluent-skeleton style="border-radius: 4px; height: 20px;" shape="rect" shimmer></fluent-skeleton></div>`,
                F = C.dy`
${(0, P.g)((e => e.isDivider), C.dy`<fluent-divider class="menu-item-divider"></fluent-divider>`)}
${(0, P.g)((e => e.isText), C.dy`<div class="menu-item-text" role="presentation">${e => e.title}</div>`)}
${(0, P.g)((e => e.isLoading), I)}
${(0, P.g)((e => !e.isDivider && !e.isText && !e.isLoading), C.dy`<fluent-menu-item aria-label="${e => e.ariaLabel ? e.ariaLabel : `${e.title} menu item`}" aria-selected="${e => !!e.ariaSelected && e.ariaSelected}" class= "menu-item ${e => e.isSelected ? "item-selected" : ""}" part="menu-item" @change=${(e, t) => e.onClick(t.event)} tabindex="0" role="menuitem" exportparts="start: actions-menu-start menu-item icon-img" id="${e => e.id}" ?disabled="${e => e.disabled}" isNavigation="${e => e.isNavigation}" data-t="${e => e.telemetryTag}" data-customhandled=${e => e.dataCustomHandled || void 0}>${(e, t) => e.glyphUrls && Object.keys(e.glyphUrls).length ? t.parent.isGlyphUrlsPicture ? C.dy`<picture slot="start" part="icon" aria-hidden="true"><source srcset="${e.glyphUrls.darkMode}" media="(prefers-color-scheme: dark)"><img part="icon-img" src=${e.glyphUrls.lightMode}></picture>` : t.parent.isDarkMode ? C.dy`<img class="dark" slot="start" part="icon" src=${e.glyphUrls.darkMode} aria-hidden="true"/>` : C.dy`<img class="light" slot="start" part="icon" src=${e.glyphUrls.lightMode} aria-hidden="true"/>` : e.glyph ? C.dy`<span slot="start" class="icon" part="icon" aria-hidden="true">${e => "string" == typeof e.glyph ? C.dy`${C.dy.partial(e.glyph)}` : e.glyph}</span>` : void 0} ${e => e.title} ${(e, t) => e.suffixGlyphUrls && Object.keys(e.suffixGlyphUrls).length ? t.parent.isGlyphUrlsPicture ? C.dy`<picture slot="end" aria-hidden="true"><source srcset="${e.suffixGlyphUrls.darkMode}" media="(prefers-color-scheme: dark)"><img src=${e.suffixGlyphUrls.lightMode}></picture>` : t.parent.isDarkMode ? C.dy`<img class="dark" slot="end" src=${e.suffixGlyphUrls.darkMode} aria-hidden="true"/>` : C.dy`<img class="light" slot="end" src=${e.suffixGlyphUrls.lightMode} aria-hidden="true"/>` : e.suffixGlyph ? C.dy`<span slot="end" class="icon" aria-hidden="true">${e => "string" == typeof e.suffixGlyph ? C.dy`${C.dy.partial(e.suffixGlyph)}` : e.suffixGlyph}</span>` : void 0}</fluent-menu-item>`)}
`,
                L = C.dy`<fluent-menu ${(0, T.i)("fluentMenu")} @keydown=${(e, t) => e.keyDownHandler(t.event)} class=${e => (0, B.A)("menu", ["detail-page", !!e.useDetailPageStyles])} part="menu">${(0, A.rx)((e => e.menuItems), F)}</fluent-menu>`,
                R = C.dy`<template id="actions-menu">${(0, P.g)((e => e.useFastAnchoredRegion), C.dy`<fluent-anchored-region part="menu-region" :anchorElement=${e => e.referrerButton || document.body} fixed-placement="${e => e.fixedPosition}" vertical-positioning-mode="dynamic" vertical-default-position="${e => e.defaultVerticalPosition}" horizontal-positioning-mode="dynamic" horizontal-default-position="${e => e.defaultHorizontalPosition}" horizontal-inset="true">${L}</fluent-anchored-region>`)} ${(0, P.g)((e => !e.useFastAnchoredRegion), C.dy`${L}`)}</template>`;
            r.D.define(a.H.registry), i.D.define(a.H.registry), s.D.define(a.H.registry), c.D.define(a.H.registry), d.D.define(a.H.registry);
            let M = class extends b {
            };
            M = (0, n.gn)([(0, l.M)({
                name: "msn-actions-menu",
                template: R,
                styles: k,
                shadowOptions: {delegatesFocus: !0}
            })], M)
        }, 10255: function (e, t, o) {
            "use strict";
            o.d(t, {
                il: function () {
                    return Be
                }
            });
            var n, r = o(33940), a = o(44035), i = o(47386), s = o(20089), c = o(93590), d = o(23549), l = o(82898),
                p = o(45927), u = o(78951), m = o(21930), g = o(19995), h = o(10754), f = o(25514), b = o(54175),
                v = o(69233), x = o(28904), y = o(99452), _ = o(42590), w = o(43356), S = o(34060);
            !function (e) {
                e.web = "web", e.shop = "shop"
            }(n || (n = {}));
            const k = "contextualSuggestionChange";
            let C = class extends x.H {
                constructor() {
                    super(...arguments), this.options = null, this.formParameters = [], this.disableSubmit = !1, this.searchVisible = !0, this.isVoiceSearchLoaded = !1, this.openVoiceSearchDialog = !1, this.isImageSearchLoaded = !1, this.openImageSearchDialog = !1, this.usePageBreakpoints = !1, this.isBingUrlWarmed = !1, this.isAutoSuggestInitialized = !1, this.autosuggestShown = !1, this.showAPIAutoSuggestBox = !1, this.enableLoadAPIAutoSuggestBox = !1, this.delayStartInitAPIAutoSuggestBox = !1, this.enableAPIAutoSuggestions = !1, this.isInputFocused = !1, this.searchBoxTelemetryTags = "", this.buttonTelemetryTag = "", this.inputTelemetryTag = "", this.selectBoxTelemetryTag = "", this.selectBoxOptionTelemetryTag = "", this.value = "", this.searchButtonOnLeft = !1, this.hasInitialized = !1, this.keyDownScrollHappened = !1, this.firstClickLog = !1, this.firstKeyPressLog = !1, this.bingUpsellFocused = !1, this.onAutosuggestRendered = e => {
                        const t = e.target.getAttribute("SuggMode");
                        this.isNextWordASMode = "1" === t
                    }, this.onAutosuggestShown = () => {
                        this.autosuggestShown = !0, (0, s.Gg)(s.tk.search, !0), d.M0 && d.M0.addOrUpdateTmplProperty("CHASShow", "1")
                    }, this.onAutosuggestHidden = () => {
                        this.autosuggestShown && ((0, s.Gg)(s.tk.search, !1), this.autosuggestShown = !1)
                    }, this.onAPIAutosuggestShown = () => {
                        this.showAPIAutoSuggestBox = !0, (0, s.Gg)(s.tk.search, !0), d.M0 && d.M0.addOrUpdateTmplProperty("CHASShow", "1")
                    }, this.onAPIAutosuggestHidden = () => {
                        this.showAPIAutoSuggestBox && ((0, s.Gg)(s.tk.search, !1), this.showAPIAutoSuggestBox = !1)
                    }, this.onAPIAutosuggestRendered = () => {
                        const e = this.formElement.getAttribute("SuggMode");
                        this.isNextWordASMode = "1" === e
                    }, this.onDocumentKeypress = e => {
                        const t = e.composedPath(), o = t && t[0] && t[0], n = o && o.tagName.toLowerCase(),
                            r = o && o.isContentEditable || e.target && e.target.isContentEditable;
                        ["input", "fluent-text-field", "fluent-text-area", "textarea", "cs-feed-layout", "msft-feed-layout", "card-action", "qna-feed-list", "select", "fluent-select", "cs-waterfall-feed-layout"].includes(n) || e.target.id === a.cN || r || e.charCode > 32 && e.charCode <= 126 && (this.inputElement.focus(), e.stopPropagation())
                    }, this.inputOnFocus = () => {
                        this.isInputFocused = !0
                    }, this.inputOnBlur = (e = void 0) => {
                        this.isInputFocused = !1
                    }, this.inputOnClick = () => {
                        !1 === this.firstClickLog && (d.M0 && d.M0.addOrUpdateTmplProperty("CHInputClick", "1"), this.firstClickLog = !0), !this.delayStartInitAPIAutoSuggestBox || this.isAutoSuggestInitialized || this.enableLoadAPIAutoSuggestBox || this.initAPIAutoSuggest()
                    }, this.onKeyUp = e => ("Tab" !== e.key && "Escape" !== e.key && (!1 === this.firstKeyPressLog && (d.M0 && d.M0.addOrUpdateTmplProperty("CHInputTp", "1"), this.firstKeyPressLog = !0), !this.delayStartInitAPIAutoSuggestBox || this.isAutoSuggestInitialized || this.enableLoadAPIAutoSuggestBox || this.initAPIAutoSuggest()), !0), this.keyDownHandler = e => {
                        var t;
                        null === (t = this.options) || void 0 === t || !t.disableArrowUpDownAS || this.keyDownScrollHappened || "ArrowDown" !== e.key && "ArrowUp" !== e.key && "PageUp" !== e.key && "PageDown" !== e.key || !this.options || !this.options.autofocus || !this.isInputFocused || this.autosuggestShown || this.showAPIAutoSuggestBox || this.scrollPageAndMarkDone()
                    }, this.bingUpsellKeyDownHandler = e => {
                        var t, o, n, r;
                        if (null === (t = this.options) || void 0 === t || !t.showCodexBingASUpsell || !this.options.codexBingUrl || "ArrowDown" !== e.key && "ArrowUp" !== e.key || !this.inputElement) return;
                        const a = null === (o = this.shadowRoot) || void 0 === o || null === (n = o.getElementById) || void 0 === n ? void 0 : n.call(o, "bing-as-upsell"),
                            i = null === (r = this.shadowRoot) || void 0 === r ? void 0 : r.activeElement;
                        if (a && i === a) if ("ArrowDown" === e.key) {
                            e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.inputElement.focus();
                            const t = new KeyboardEvent("keydown", {key: "ArrowDown", keyCode: 40});
                            this.inputElement.dispatchEvent(t)
                        } else "ArrowUp" === e.key && (e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), this.inputElement.focus(), this.bingUpsellFocused = !1)
                    }, this.inputKeyDownHandler = e => {
                        if (!this.bingUpsellFocused && "ArrowDown" === e.key) {
                            var t, o;
                            const n = null === (t = this.shadowRoot) || void 0 === t || null === (o = t.getElementById) || void 0 === o ? void 0 : o.call(t, "bing-as-upsell");
                            if (!n) return;
                            e.preventDefault(), e.stopImmediatePropagation(), e.stopPropagation(), n.focus(), this.bingUpsellFocused = !0
                        }
                    }, this.onKeypress = e => {
                        if ("Enter" !== e.key || !this.formElement) return !0;
                        this.onSubmit()
                    }, this.onVoiceSearchClick = async e => {
                        !this.isVoiceSearchLoaded && this.options && this.options.childExperienceReferencesWC && this.options.childExperienceReferencesWC.VoiceSearchWC && (this.isVoiceSearchLoaded = !0), d.M0.sendActionEvent(e.currentTarget), this.openVoiceSearchDialog = !0, e.stopImmediatePropagation()
                    }, this.voiceSearchCancelCallback = () => {
                        this.openVoiceSearchDialog = !1
                    }, this.voiceSearchSubmitCallback = e => {
                        if (!e || !this.inputElement || !this.options) return;
                        this.inputElement.value = e;
                        const t = p.u.getTelemetryObject(this.formElement);
                        t && (t.contract.overrideDestinationUrl = this.options.searchActionUrl, t.contract.behavior = l.wu.VoiceSearch, p.u.setAttribute(this.formElement, t.contract), d.M0.sendActionEvent(this.formElement, l.Aw.Submit, l.wu.VoiceSearch)), this.formElement.action = "//www.bing.com/opaluqu/v1";
                        this.inputElement.querySelector("#vshi") || this.inputElement.appendChild(this.voiceSearchHiddenInputs()), this.formElement.submit()
                    }, this.voiceSearchHiddenInputs = () => {
                        const e = document.createElement("div");
                        e.setAttribute("id", "vshi");
                        const t = e.appendChild(document.createElement("input"));
                        t.setAttribute("type", "hidden"), t.setAttribute("name", "input"), t.setAttribute("value", "2");
                        const o = e.appendChild(document.createElement("input"));
                        o.setAttribute("type", "hidden"), o.setAttribute("name", "uquresponseformat"), o.setAttribute("value", "1");
                        const n = e.appendChild(document.createElement("input"));
                        return n.setAttribute("type", "hidden"), n.setAttribute("name", "uqubfprlg"), n.setAttribute("value", "1"), e
                    }, this.onImageSearchClick = e => {
                        !this.isImageSearchLoaded && this.options && this.options.childExperienceReferencesWC && this.options.childExperienceReferencesWC.ImageSearchWC && (this.isImageSearchLoaded = !0), (this.autosuggestShown || this.showAPIAutoSuggestBox) && document.body.click(), d.M0.sendActionEvent(e.currentTarget), this.openImageSearchDialog = !0, e.stopImmediatePropagation()
                    }, this.imageSearchCancelCallback = () => {
                        this.openImageSearchDialog = !1
                    }, this.getSelectedScopeUrlParam = e => {
                        var t;
                        return e === Object.keys((null === (t = this.options) || void 0 === t || null === (t = t.searchScopeSelectConfig) || void 0 === t ? void 0 : t.selectOptions) || {})[1] ? n.shop : n.web
                    }, this.onContextualSuggestionChange = e => {
                        if (c.jG.LocaleDisplayLanguageString !== c.jG.LocaleContentMarketString) return;
                        const t = null == e ? void 0 : e.detail;
                        t && (this.options && this.options.contextSuggestAsPlaceholder && (this.contextualSuggestionText = t.suggestion), this.options && this.options.enableContextualAutoSuggest && (this.contextualSuggestions = t.suggestions))
                    }
                }

                enableWarmBingUrlChanged() {
                    this.enableWarmBingUrl && !this.isBingUrlWarmed && this.delayWarmBingConnections()
                }

                enableAutoSuggestionChanged() {
                    this.enableAutoSuggestion && !this.isAutoSuggestInitialized && !this.enableAPIAutoSuggestions && this.formElement && this.delayInitAutosuggest(), this.enableAutoSuggestion && !this.isAutoSuggestInitialized && this.formElement && this.enableAPIAutoSuggestions && !this.enableLoadAPIAutoSuggestBox && this.delayInitAPIAutosuggest()
                }

                inputElementChanged(e, t) {
                    void 0 === e && t && t.value !== this.value && (this.value = t.value)
                }

                connected() {
                    var e;
                    (this.enableWarmBingUrl && !this.isBingUrlWarmed && this.delayWarmBingConnections(), this.disableSubmit || document.body.addEventListener("keypress", this.onDocumentKeypress, {capture: !0}), this.options && this.options.showCodexBingASUpsell && this.options.codexBingUrl) && (this.bindInputKeyDownHandler = this.inputKeyDownHandler.bind(this), null === (e = this.inputElement) || void 0 === e || e.addEventListener("keydown", this.bindInputKeyDownHandler), document.addEventListener("keydown", this.bingUpsellKeyDownHandler));
                    !this.enableAutoSuggestion || this.isAutoSuggestInitialized || this.enableAPIAutoSuggestions || this.delayInitAutosuggest(), this.options && this.options.autofocus && this.inputElement && this.inputElement.focus(), this.enableAutoSuggestion && !this.isAutoSuggestInitialized && this.enableAPIAutoSuggestions && !this.enableLoadAPIAutoSuggestBox && this.delayInitAPIAutosuggest()
                }

                optionsChanged(e, t) {
                    if (!this.options) return;
                    this.hasInitialized || (this.initialize(), this.hasInitialized = !0), this.options.autofocus && this.inputElement && this.inputElement.focus();
                    const o = c.jG && c.jG.CurrentRequestTargetScope && "kids" === c.jG.CurrentRequestTargetScope.audienceMode;
                    !0 === this.options.enableWebAPISuggetion && !o && !this.isMobile() && !this.isTablet() && this.options.enableMSNSuggestions && this.options.enableMSNSuggestions > 0 ? 1 === this.options.enableMSNSuggestions ? this.placeholder = this.placeholder || this.options.localizedStrings.placeholderWithMSN || this.options.localizedStrings.placeholderText : 2 === this.options.enableMSNSuggestions && (this.placeholder = this.placeholder || this.options.localizedStrings.placeholderWithMSNv2 || this.options.localizedStrings.placeholderText) : this.placeholder = this.placeholder || this.options.localizedStrings.placeholderText, (null == t ? void 0 : t.additionalFormParamMap) !== (null == e ? void 0 : e.additionalFormParamMap) && this.populateFormParameters()
                }

                get getPlaceholder() {
                    if (this.options && this.options.enableContextualSuggest && this.contextualSuggestionText) {
                        const e = this.options.contextualSuggestHint && this.options.localizedStrings.contextualSuggestHintText ? `${this.options.localizedStrings.contextualSuggestHintText}: ${this.contextualSuggestionText}` : this.contextualSuggestionText,
                            t = !this.isInputFocused || this.options.contextualSuggestOnFocus;
                        return t && d.M0.addOrUpdateTmplProperty("ContextualSB", "1"), t ? e : ""
                    }
                    return this.isInputFocused ? "" : this.placeholder
                }

                initialize() {
                    if (!this.options) return;
                    if (this.searchActionUrl = this.options.searchActionUrl, this.populateTelemetryTags(), this.populateFormParameters(), (0, m.BW)(v.p.searchBox), (0, g.c)((() => {
                        const e = (0, h.Ou)(), t = e[m.nz + v.p.searchBox], o = t && void 0 === e[v.p.isSSRAborted];
                        (0, m.o_)(v.p.searchBox, !1, o ? t : void 0, !o)
                    })), this.options.disableArrowUpDownAS && document.addEventListener("keydown", this.keyDownHandler, {capture: !0}), this.options.enableContextualSuggest) {
                        document.addEventListener(k, this.onContextualSuggestionChange);
                        const e = new CustomEvent("commonSearchBoxConnecteState", {detail: {connected: !0}});
                        document.dispatchEvent(e)
                    }
                    this.isInputFocused = this.options.autofocus || !1, this.searchButtonOnLeft = !this.options.showSearchScopeSelectDropdownBox && !this.options.searchButtonOnRight, this.options.showSearchScopeSelectDropdownBox && this.setDefaultSearchScope();
                    const e = c.jG.CurrentRequestTargetScope && "kids" === c.jG.CurrentRequestTargetScope.audienceMode;
                    this.enableAPIAutoSuggestions = this.options && !0 === this.options.enableWebAPISuggetion && !this.isMobile() && !this.isTablet() && !e
                }

                handleTextInput() {
                    this.inputElement && null !== this.inputElement.value && (this.value = this.inputElement.value)
                }

                populateTelemetryTags() {
                    var e, t;
                    const o = {
                        content: {
                            headline: null !== (e = this.options) && void 0 !== e && e.customizeSearch ? "customsearch" : "",
                            type: l.uH.TextSearch
                        }, behavior: l.wu.TextSearch, type: l.c9.SearchBox
                    };
                    this.searchBoxTelemetryTags = new u.D({
                        ...o,
                        name: "headersearch"
                    }).getMetadataTag(), null !== (t = this.options) && void 0 !== t && t.customizeSearch ? this.inputTelemetryTag = new u.D({
                        ...o,
                        name: "search_customsearch",
                        action: l.Aw.Submit
                    }).getMetadataTag() : this.inputTelemetryTag = new u.D({
                        ...o,
                        name: "search_websearch",
                        action: l.Aw.Submit
                    }).getMetadataTag(), this.buttonTelemetryTag = new u.D({
                        name: "searchinput",
                        behavior: l.wu.Undefined
                    }).getMetadataTag(), this.clearTelemetryTag = new u.D({
                        name: "clear",
                        behavior: l.wu.Close,
                        content: {type: l.uH.TextSearch}
                    }).getMetadataTag(), this.options && this.options.showVoiceSearchButton && (this.voiceSearchButtonTelemetryTag = new u.D({
                        name: "voicesearch",
                        behavior: l.wu.Open,
                        content: {type: l.uH.VoiceSearch, headline: "Voice Search"},
                        overrideDestinationUrl: " "
                    }).getMetadataTag()), this.options && this.options.showSearchScopeSelectDropdownBox && (this.selectBoxTelemetryTag = new u.D({
                        name: "searchscope_select",
                        behavior: l.wu.Open,
                        action: l.Aw.Click,
                        content: {type: l.uH.Undefined, headline: this.selectedScope}
                    }).getMetadataTag()), this.options && this.options.childExperienceReferencesWC && this.options.childExperienceReferencesWC.ImageSearchWC && (this.imageSearchButtonTelemetryTag = new u.D({
                        name: "ImageSearch",
                        behavior: l.wu.Open,
                        content: {type: l.uH.ImageSearch, headline: "Image Search"},
                        overrideDestinationUrl: " "
                    }).getMetadataTag()), this.options && this.options.showCodexBingASUpsell && (this.bingASUpsellTelemetryTag = new u.D({
                        name: "search_bingASUpsell",
                        behavior: l.wu.Navigate,
                        action: l.Aw.Click,
                        content: {type: l.uH.PartnerLinks, headline: "Codex Bing Link"},
                        overrideDestinationUrl: "bingChat"
                    }).getMetadataTag())
                }

                injectSearchSelectOptionTelemetry(e) {
                    return this.selectBoxOptionTelemetryTag = new u.D({
                        name: "searchscope_option",
                        behavior: l.wu.Show,
                        action: l.Aw.Click,
                        content: {type: l.uH.Undefined, headline: e}
                    }).getMetadataTag()
                }

                async delayInitAutosuggest() {
                    await (0, w.F_)(), window.requestAnimationFrame((() => {
                        this.initAutosuggest()
                    }))
                }

                initAutosuggest() {
                    if (!this.options || !this.options.autoSuggest || !this.options.searchActionUrl) return;
                    const e = "AutoSuggest.Service.Elements.";
                    (0, f.Z)(window, e + "Input", this.inputElement), (0, f.Z)(window, e + "Form", this.formElement), this.formElement.addEventListener("autosuggestRendered", this.onAutosuggestRendered), this.formElement.addEventListener("autosuggestShown", this.onAutosuggestShown), this.formElement.addEventListener("autosuggestHide", this.onAutosuggestHidden), (0, i.fF)(this.getAutoSuggestInitProps()), this.isAutoSuggestInitialized = !0
                }

                getAutoSuggestInitProps() {
                    var e, t;
                    if (null !== (e = this.options) && void 0 !== e && e.showSearchScopeSelectDropdownBox) {
                        const e = new URL(window.location.href).searchParams.get("scope");
                        var o;
                        if (this.options && this.options.autoSuggest && e) this.options.autoSuggest.partnerEndpoint = e == n.web || null === (o = this.options.autoSuggest) || void 0 === o ? void 0 : o.partnerEndpoint
                    }
                    return {
                        autoSuggestProperties: this.options && this.options.autoSuggest || {},
                        requestId: d.M0.getRequestId(),
                        telemetryCallback: d.M0 && d.M0.sendActionEvent.bind(d.M0),
                        action: this.options && this.options.searchActionUrl || "",
                        searchBoxContext: {inputRef: this.inputElement, formRef: this.formElement},
                        isDarkMode: (null === (t = this.options) || void 0 === t || !t.disableDarkTheme) && matchMedia("(prefers-color-scheme: dark)").matches,
                        enableDetailLogs: this.options && this.options.enableASDetailLog || !1
                    }
                }

                async delayInitAPIAutosuggest() {
                    await (0, w.F_)(), window.requestAnimationFrame((() => {
                        this.delayStartInitAPIAutoSuggestBox = !0
                    }))
                }

                initAPIAutoSuggest() {
                    this.formElement.addEventListener("renderAPIAutoSuggest", this.onAPIAutosuggestRendered), this.formElement.addEventListener("showAPIAutoSuggest", this.onAPIAutosuggestShown), this.formElement.addEventListener("cleanAPIAutoSuggest", this.onAPIAutosuggestHidden), this.isAutoSuggestInitialized = !0, this.enableLoadAPIAutoSuggestBox = !0
                }

                onSubmit() {
                    var e;
                    const t = !this.inputElement.value && this.contextualSuggestionText && (null === (e = this.options) || void 0 === e ? void 0 : e.contextualSuggestAsDefault);
                    if (this.disableSubmit && !t) return;
                    t && (this.value = this.contextualSuggestionText || "", this.inputElement.value = this.contextualSuggestionText || ""), this.inputElement.value || d.M0 && d.M0.sendActionEvent(this.formElement, l.Aw.Click, l.wu.NoSearchQuerySubmit);
                    const o = p.u.get(this.formElement);
                    o && (o.contract.destinationUrl = this.options && this.options.searchActionUrl || "", t && (o.contract.content = {
                        ...o.contract.content,
                        headline: "Contextual Search"
                    }), p.u.setAttribute(this.formElement, o.contract)), d.M0 && d.M0.sendActionEvent(this.formElement, l.Aw.Submit, l.wu.TextSearch), this.formElement.submit()
                }

                onClear(e) {
                    d.M0.sendActionEvent(e.detail)
                }

                clearSearch(e) {
                    e.stopPropagation(), this.inputElement.value = "", this.value = "", this.inputElement.dispatchEvent(new Event("input")), this.inputElement.focus(), d.M0.sendActionEvent(e.currentTarget)
                }

                scrollPageAndMarkDone() {
                    this.inputElement.blur(), this.keyDownScrollHappened = !0
                }

                async delayWarmBingConnections() {
                    await (0, w.F_)(), this.warmBingConnections()
                }

                warmBingConnections() {
                    if (!this.options) return;
                    const {warmWwwBing: e, warmRBingStatics: t} = this.options;
                    if (!t && !e) return;
                    const o = (e, t = !1) => {
                        const o = document.createElement("link");
                        o.rel = "preconnect", o.href = e, t && o.setAttribute("crossorigin", ""), document.head.appendChild(o)
                    };
                    t && (o("https://r.bing.com"), o("https://r.bing.com", !0), o("https://r.msftstatic.com"), o("https://r.msftstatic.com", !0)), e && o("https://www.bing.com"), this.isBingUrlWarmed = !0
                }

                populateFormParameters() {
                    if (!this.options) return;
                    const e = {};
                    this.options.formParameters && this.options.formParameters.forEach && this.options.formParameters.forEach((t => {
                        t && (e[t.name] = t.value)
                    })), this.options.additionalFormParamMap && Object.assign(e, this.options.additionalFormParamMap), this.formParameters = Object.entries(e).map((e => {
                        const [t, o] = e;
                        return {name: t, value: o}
                    }))
                }

                handleScopeSelectClick(e) {
                    document.body.click(), e.stopPropagation()
                }

                handleFluentSelectChange(e) {
                    var t;
                    if (this.selectedScope = null == e || null === (t = e.target) || void 0 === t ? void 0 : t.value, this.options && this.options.searchScopeSelectConfig && this.selectedScope) {
                        var o, n;
                        this.searchActionUrl = null === (o = this.options.searchScopeSelectConfig.selectOptions) || void 0 === o || null === (o = o[this.selectedScope]) || void 0 === o ? void 0 : o.searchActionUrl, this.placeholder = null === (n = this.options.searchScopeSelectConfig.selectOptions) || void 0 === n || null === (n = n[this.selectedScope]) || void 0 === n ? void 0 : n.placeholderLoc;
                        const e = JSON.parse(JSON.stringify(this.formParameters)),
                            t = null == e ? void 0 : e.find((e => "form" == e.name));
                        var r;
                        if (t) t.value = null === (r = this.options.searchScopeSelectConfig.selectOptions) || void 0 === r || null === (r = r[this.selectedScope]) || void 0 === r ? void 0 : r.formCode;
                        this.formParameters = e;
                        const a = new URL(window.location.href);
                        a.searchParams.get("scope") ? a.searchParams.set("scope", this.getSelectedScopeUrlParam(this.selectedScope)) : a.searchParams.append("scope", this.getSelectedScopeUrlParam(this.selectedScope)), window.location.href = a.href
                    }
                }

                setDefaultSearchScope() {
                    const e = new URL(window.location.href).searchParams.get("scope");
                    if (this.options && this.options.searchScopeSelectConfig && this.options.showSearchScopeSelectDropdownBox && !this.selectedScope) {
                        const i = Object.keys(this.options.searchScopeSelectConfig.selectOptions || {});
                        if (i && i.length > 0 && null != this.options.searchScopeSelectConfig.default) switch (e) {
                            case n.web:
                                this.selectedScope = i[0];
                                break;
                            case n.shop:
                                this.selectedScope = i[1];
                                break;
                            default:
                                this.selectedScope = i[this.options.searchScopeSelectConfig.default]
                        }
                        if (this.selectedScope) {
                            var t, o, r;
                            this.searchActionUrl = null === (t = this.options.searchScopeSelectConfig.selectOptions) || void 0 === t || null === (t = t[this.selectedScope]) || void 0 === t ? void 0 : t.searchActionUrl;
                            const e = null === (o = this.formParameters) || void 0 === o ? void 0 : o.find((e => "form" == e.name));
                            var a;
                            if (this.placeholder = null === (r = this.options.searchScopeSelectConfig.selectOptions) || void 0 === r || null === (r = r[this.selectedScope]) || void 0 === r ? void 0 : r.placeholderLoc, e) e.value = null === (a = this.options.searchScopeSelectConfig.selectOptions) || void 0 === a || null === (a = a[this.selectedScope]) || void 0 === a ? void 0 : a.formCode
                        }
                    }
                }

                onCodexBingClick(e) {
                    var t;
                    this.options && (null !== (t = this.inputElement) && void 0 !== t && t.value && this.options.codexBingSearchUrl ? (d.M0.sendActionEvent(e.currentTarget, l.Aw.Click, l.wu.TextSearch), window.open(`${this.options.codexBingSearchUrl}&q=${encodeURIComponent(this.inputElement.value)}`, "_blank")) : this.options.codexBingUrl && (d.M0.sendActionEvent(e.currentTarget, l.Aw.Click, l.wu.Navigate), window.open(this.options.codexBingUrl, "_blank")))
                }

                isMobile() {
                    return "phone" === (S.Al && S.Al.ClientSettings && S.Al.ClientSettings.deviceFormFactor)
                }

                isTablet() {
                    return "tablet" === (S.Al && S.Al.ClientSettings && S.Al.ClientSettings.deviceFormFactor)
                }

                disconnectedCallback() {
                    var e;
                    if (super.disconnectedCallback(), this.disableSubmit || document.body.removeEventListener("keypress", this.onDocumentKeypress, {capture: !0}), this.options && this.options.disableArrowUpDownAS && document.removeEventListener("keydown", this.keyDownHandler, {capture: !0}), this.options && this.options.enableContextualSuggest && document.removeEventListener(k, this.onContextualSuggestionChange), this.enableAutoSuggestion && this.formElement && !this.enableAPIAutoSuggestions && (this.formElement.removeEventListener("autosuggestRendered", this.onAutosuggestRendered), this.formElement.removeEventListener("autosuggestShown", this.onAutosuggestShown), this.formElement.removeEventListener("autosuggestHide", this.onAutosuggestHidden)), this.enableAutoSuggestion && this.formElement && this.enableLoadAPIAutoSuggestBox && (this.formElement.removeEventListener("showAPIAutoSuggest", this.onAPIAutosuggestShown), this.formElement.removeEventListener("cleanAPIAutoSuggest", this.onAPIAutosuggestHidden), this.formElement.removeEventListener("renderAPIAutoSuggest", this.onAPIAutosuggestRendered)), this.options && this.options.showCodexBingASUpsell && null !== (e = this.options) && void 0 !== e && e.codexBingUrl) {
                        var t;
                        if (this.bindInputKeyDownHandler) null === (t = this.inputElement) || void 0 === t || t.removeEventListener("keydown", this.bindInputKeyDownHandler);
                        document.removeEventListener("keydown", this.bingUpsellKeyDownHandler)
                    }
                }
            };
            (0, r.gn)([y.LO], C.prototype, "options", void 0), (0, r.gn)([y.LO], C.prototype, "formParameters", void 0), (0, r.gn)([y.LO], C.prototype, "fakeFocused", void 0), (0, r.gn)([y.LO], C.prototype, "searchVisible", void 0), (0, r.gn)([y.LO], C.prototype, "isVoiceSearchLoaded", void 0), (0, r.gn)([y.LO], C.prototype, "openVoiceSearchDialog", void 0), (0, r.gn)([y.LO], C.prototype, "isImageSearchLoaded", void 0), (0, r.gn)([y.LO], C.prototype, "openImageSearchDialog", void 0), (0, r.gn)([(0, _.Lj)({mode: "boolean"})], C.prototype, "usePageBreakpoints", void 0), (0, r.gn)([y.LO], C.prototype, "searchIcon", void 0), (0, r.gn)([y.LO], C.prototype, "enableWarmBingUrl", void 0), (0, r.gn)([y.LO], C.prototype, "enableAutoSuggestion", void 0), (0, r.gn)([y.LO], C.prototype, "autosuggestShown", void 0), (0, r.gn)([y.LO], C.prototype, "showAPIAutoSuggestBox", void 0), (0, r.gn)([y.LO], C.prototype, "enableLoadAPIAutoSuggestBox", void 0), (0, r.gn)([y.LO], C.prototype, "isInputFocused", void 0), (0, r.gn)([y.LO], C.prototype, "inputElement", void 0), (0, r.gn)([y.LO], C.prototype, "searchBoxTelemetryTags", void 0), (0, r.gn)([y.LO], C.prototype, "buttonTelemetryTag", void 0), (0, r.gn)([y.LO], C.prototype, "inputTelemetryTag", void 0), (0, r.gn)([y.LO], C.prototype, "clearTelemetryTag", void 0), (0, r.gn)([y.LO], C.prototype, "voiceSearchButtonTelemetryTag", void 0), (0, r.gn)([y.LO], C.prototype, "imageSearchButtonTelemetryTag", void 0), (0, r.gn)([y.LO], C.prototype, "bingASUpsellTelemetryTag", void 0), (0, r.gn)([y.LO], C.prototype, "isNextWordASMode", void 0), (0, r.gn)([y.LO], C.prototype, "searchActionUrl", void 0), (0, r.gn)([y.LO], C.prototype, "placeholder", void 0), (0, r.gn)([y.LO], C.prototype, "contextualSuggestionText", void 0), (0, r.gn)([y.LO], C.prototype, "contextualSuggestions", void 0), (0, r.gn)([y.LO], C.prototype, "selectedScope", void 0), (0, r.gn)([y.LO], C.prototype, "selectBoxTelemetryTag", void 0), (0, r.gn)([y.LO], C.prototype, "selectBoxOptionTelemetryTag", void 0), (0, r.gn)([y.LO], C.prototype, "value", void 0), (0, r.gn)([y.LO], C.prototype, "searchButtonOnLeft", void 0), (0, r.gn)([y.lk], C.prototype, "getPlaceholder", null), C = (0, r.gn)([b.b], C);
            var P = o(50632), T = o(40378), B = o(958), A = o(27460), I = o(42689), F = o(26738), L = o(38492),
                R = o(53131), M = o(62734), N = o(40009), E = o(74449), $ = o(22674), D = o(78923), j = o(29717),
                H = o(81239), U = o(69393);
            const O = D.i`
@media (max-width:343px){.core{width:310px}:host([isscopedsearchbox]) .form #sw_as{width:222px}}@media (min-width:343px) and (max-width:644px){.core{width:343px}:host([isscopedsearchbox]) .form #sw_as{width:222px}}@media (min-width:644px) and (max-width:956px){.core{width:400px}.core.core-info-bc{width:343px}:host([isscopedsearchbox]) .form #sw_as{width:278px}}@media (min-width:956px) and (max-width:1268px){.core{width:528px}:host([isscopedsearchbox]) .form #sw_as{width:406px}.bing-as-upsell-container{font-size:14px}.cbas-description{max-width:330px}.cbas-link{max-width:110px}}@media (max-width:956px){.bing-as-upsell-container{display:none}}@media (min-width:1268px){.core{width:760px}.core.wd_search{width:940px}}`,
                W = D.i`
${(0, P.vW)(null, P.K$.c1)}{.core{width:343px}:host([isscopedsearchbox]) .form #sw_as{width:222px}}${(0, P.eH)(P.K$.c2)}{.core{width:400px}.core.core-info-bc{width:343px}:host([isscopedsearchbox]) .form #sw_as{width:278px}}${(0, P.eH)(P.K$.c3)}{.core{width:528px}:host([isscopedsearchbox]) .form #sw_as{width:406px}.bing-as-upsell-container{font-size:14px}.cbas-description{max-width:330px}.cbas-link{max-width:110px}}${(0, P.vW)(null, P.K$.c2)}{.bing-as-upsell-container{display:none}}${(0, P.vW)(P.K$.c4, null)}{.core{width:760px}.core.wd_search{width:940px}}`,
                z = D.i`
form.autosuggestShown.as .core .search-btn{border-radius:0 var(--search-box-radius) 0 0}.core .search-btn{border-radius:0 var(--search-box-radius) var(--search-box-radius) 0}.core .s-btn-tb.search-btn,.core.search-btn-on-left .search-btn{border-radius:var(--search-box-radius) 0 0 var(--search-box-radius);background:transparent}.search-btn-on-right.core{background:linear-gradient(to left,${B.Av} 10px,${A.s} 50px)}`,
                G = D.i`
.core .s-btn-tb,form.autosuggestShown.as .core .search-btn{border-radius:var(--search-box-radius) 0 0 0}.core .search-btn{border-radius:var(--search-box-radius) 0 0 var(--search-box-radius)}.core .s-btn-tb.search-btn,.core.search-btn-on-left .search-btn{border-radius:0 var(--search-box-radius) var(--search-box-radius) 0;background:transparent}.bing-upsell-container{right:unset;left:-54px}.search-btn-on-right.core{background:linear-gradient(to right,${B.Av} 10px,${A.s} 50px)}`,
                V = D.i`
.core{border:1px solid ${(0, T.Y)() ? U.YP.forcedColorLink : U.YP.selectedBackground}}#sw_as > .sa_as{border-top:none}#sw_as #sa_ul:not(:empty){border:1px solid ${(0, T.Y)() ? U.YP.forcedColorLink : U.YP.selectedBackground}}@-moz-document url-prefix(){.core .search-btn::part(control){border:none}.image-search::part(control){border:none}.clear-btn::part(control){border:none}}`,
                q = D.i`
:host{display:block}.form{position:relative;height:46px}.search-hidden{visibility:hidden}@keyframes blink{0%{opacity:1}61.55%{opacity:0}}.fake-cursor{background:${I.C};position:absolute;width:1px;top:12px;bottom:12px;margin-inline-start:56px;margin-inline-end:16px;animation:blink 1.3s step-end infinite}.search-btn-on-right.fake-cursor{margin-inline-start:16px}.search-icon{display:flex;justify-content:center;align-items:center}.voice-search{background:transparent;border:none;cursor:pointer;height:46px;padding:0;margin-inline-end:16px}:host(.with-gleam) .voice-search{margin-inline-end:8px}.voice-search svg{padding-top:4px;fill:${F.go}}.image-srch-container{margin-inline-end:12px}:host(.with-gleam) .image-srch-container{margin-inline-end:5px}.image-search svg{height:24px;width:24px;fill:${F.go}}.image-search{height:46px;background:transparent;padding:0;border:none}:host([isscopedsearchbox]) .form #sw_as{width:638px}.form #sw_as{z-index:600;--search-box-radius:22px}.form.rect #sw_as{--search-box-radius:4px}:host([isscopedsearchbox]) #sw_as > .sa_as{margin-left:122px}#sw_as > .sa_as{border:none;border-radius:0 0 var(--search-box-radius) var(--search-box-radius);border-top:solid 1px #e5e5e5;box-shadow:0px 5px 7px rgb(0 0 0 / 9%),0px 3px 3.5px rgb(0 0 0 / 3%),0px 1px 1.5px rgb(0 0 0 / 9%);background-color:${L.I}}#sw_as #sa_ul:not(:empty){border-bottom-left-radius:var(--search-box-radius);border-bottom-right-radius:var(--search-box-radius);overflow:hidden;padding:0}#sw_as .sa_drw li:last-of-type{border-bottom-left-radius:0px;border-bottom-right-radius:0px}#sw_as ul#sa_ul div.sa_tm,#sw_as #sa_ul .sa_hd{margin-inline-start:16px;margin-inline-end:16px}#sw_as div.sa_as .sa_drw .sa_sg,#sw_as div.sa_as .sa_drw li.sa_hd,#sw_as div.sa_rmvd{padding-left:0px}#sw_as a>.as_msb_msnedgentp,#sw_as li>.as_msb_msnedgentp{padding-inline-start:16px;padding-inline-end:16px}#sa_ul>*:last-child>li:last-of-type .sa_hd,#sa_ul>*:last-child>li:last-of-type .sa_tm,#sa_ul>*:last-child>li:last-of-type .sa_msbribboncontainer,#sa_ul>li:last-child .sa_msbribboncontainer,#sa_ul>*:last-child>li:last-of-type .as_msbsugcontainer,#sa_ul>li:last-child .as_msbsugcontainer,#sa_ul>li:last-child .sa_hd,#sa_ul>li:last-child .sa_tm{padding-bottom:6px}.nwas #sa_ul>li:last-of-type .sa_tm{padding-bottom:6px}#sw_as .sa_msbribbonleft{padding-left:16px}#sw_as .sa_msbribbonright{padding-right:16px}.core{display:flex;height:100%;--search-box-radius:22px;user-select:none;--elevation:4;border-radius:var(--search-box-radius);transition:none;position:relative;overflow:hidden;background:${A.s};font-family:${R.S};${M.XC}}.core #q{-webkit-appearance:none;outline:none;background:transparent;border:0;margin-top:auto;margin-bottom:auto;border:none;padding:calc(${N._5} * 2px + 2px) 12px calc(${N._5} * 2px + 2px) 12px;color:${I.C};font-size:16px;font-weight:400;line-height:24px;width:100%;font-family:inherit;flex:1;padding-inline-start:16px}.core #q:placeholder-shown{text-overflow:ellipsis}.enhance4.core,.enhance5.core,div.enhance4.core:has(input:focus),div.enhance5.core:has(input:focus){border:solid 1px rgba(0,0,0,0)}.enhance4.core:hover{border:solid 1px rgba(131,131,131,1)}.enhance5.core:hover{border:solid 1px ${F.go}}.enhance3.core:hover{background-color:#f2f2f2}.enhance2.core #q::placeholder{color:#5f6368ff}.enhance1.core.search-btn-on-left .search-btn.stealth > svg{fill:${F.go}}.core .search-btn .search-btn-txt{font-size:16px;font-weight:400}.search-btn-on-right.core .search-btn::part(control):active{color:rgb(255,255,255)}.core .search-btn{height:inherit;min-width:auto}.core .search-btn::part(control){width:100%;padding-right:22px !important;padding-left:22px !important}.core .s-btn-tb::part(control),.core.search-btn-on-left .search-btn::part(control){padding-inline-start:16px !important;padding-inline-end:8px !important;border-radius:unset}.core.search-btn-on-left #q{padding-inline-start:6px}.core.search-btn-on-left .search-btn.stealth > svg{fill:${E.Q}}.core .search-btn.stealth{background:transparent}.core .search-btn > svg{height:24px;width:24px}.core .search-btn.stealth > svg{fill:${F.go}}:host([isscopedsearchbox]) form.autosuggestShown.as .core{border-radius:var(--search-box-radius)}form.autosuggestShown.as .core{border-radius:var(--search-box-radius) var(--search-box-radius) 0 0}form.autosuggestShown.nwas .core{border-radius:var(--search-box-radius)}.core input[type="search"]::-webkit-search-decoration,.core input[type="search"]::-webkit-search-cancel-button,.core input[type="search"]::-webkit-search-results-button,.core input[type="search"]::-webkit-search-results-decoration{display:none}.clear-container{display:flex;align-items:center;z-index:2;height:46px}.cc-pa{padding-inline-end:16px}.bing-upsell-container{position:absolute;right:-54px;top:0px;cursor:pointer}.bing-upsell-btn{background:transparent}.bing-upsell-btn > svg{width:48px;height:48px}.bing-as-upsell-container{background:${A.s};z-index:600;box-shadow:rgba(0,0,0,0.09) 0px 5px 7px,rgba(0,0,0,0.03) 0px 3px 3.5px,rgba(0,0,0,0.09) 0px 1px 1.5px}.bing-as-upsell{display:flex;padding-inline-start:15px;text-decoration:none;overflow:hidden;cursor:pointer;border:none;background:transparent;font:inherit;line-height:46px;height:46px}.cbas-icon{padding-inline-end:5px;display:flex;align-items:center;height:100%}.cbas-icon > img{width:28px;height:28px}.cbas-description{padding-inline-start:8px;color:${I.C};overflow:hidden;max-width:440px;white-space:nowrap;text-overflow:ellipsis}.cbas-link{padding-inline-start:14px;color:#115EA3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:160px}@media (max-width:500px){.core.core-bing-chat{width:316px}}.scope-search-select::part(control){padding-left:16px;padding-right:12px;font-size:16px;background:#E5E5E5;color:#1A1A1A;border-width:1px 0 1px 1px;border-radius:22px 0 0 22px}.scope-search-select::part(control):hover{background:#EBEBEB}.scope-search-select::part(indicator){margin-left:8px;margin-top:2px}.scope-search-select{height:100%;border:none;min-width:122px;background:transparent}.scope-search-select::part(listbox){position:absolute;background:${A.s};padding:0;border-radius:0 0 22px 22px;margin:0;box-shadow:none}.scope-search-select[open]::part(control){background:#EBEBEB;border-bottom-left-radius:0}.scope-search-select::part(listbox):hover{background:${A.s}}.scope-fluent-option{display:flex;justify-content:flex-start;height:44px;line-height:22px;background:#E5E5E5;font-size:16px;margin:0;padding:0 0 0 16px;border:0;color:#3F3F3F}.scope-fluent-option:hover{background:#EBEBEB}.scope-search-select::part(indicator){display:flex;justify-content:center;align-items:center;margin:0 0 0 8px}.clear-btn{background:transparent;height:46px;min-width:20px;padding-inline-end:5px}.clear-btn > svg{width:20px;height:20px}.clear-container{display:flex;align-items:center;z-index:2;height:46px;padding-inline-end:16px}`.withBehaviors((0, j.Uu)(D.i` #sw_as > .sa_as{border-top:solid 1px rgb(255 255 255 / 8%)}.voice-search:not(.disable-dk) svg{fill:${I.C}}.image-search:not(.disable-dk) svg{fill:${I.C}}.core .search-btn.stealth > svg{fill:${I.C}}.core.search-btn-on-left .search-btn.stealth > svg{fill:${I.C}}.core #q:not(.disable-dk)::placeholder{color:#FFFFFF;opacity:0.7}.scope-search-select::part(control){background:#333333;color:#D6D6D6}.scope-search-select::part(control):hover{background:#383838}.scope-search-select[open]::part(control){background:#383838}.scope-fluent-option{background:#383838;color:#D6D6D6}.scope-fluent-option:hover{background:#3D3D3D}.s-btn-tb{fill:#BEBBB8}.text-area::placeholder{color:#FFFFFF;opacity:0.7}#footer{color:#F9F9F9}.bing-as-upsell-container{background:#292929}.cbas-link{color:#479EF5}.enhance2.core #q::placeholder{color:#ffffff;opacity:1}.enhance3.core:hover{background-color:#434343}`), new $.O(z, G), (0, j.vF)(V), new H.w("usePageBreakpoints", !1, O), new H.w("usePageBreakpoints", !0, W));
            var Y = o(49218), K = o(93703), J = o(89150), X = o(41472), Q = o(7275), Z = o(26391), ee = o.n(Z),
                te = o(76384), oe = o.n(te), ne = o(23423), re = o.n(ne), ae = o(22091), ie = o.n(ae);
            const se = Y.dy`<input name=${e => e.name} type="hidden" value=${e => e.value} />`,
                ce = Y.dy`<div class="fake-cursor ${e => e.searchButtonOnLeft ? "search-btn-on-left" : "search-btn-on-right"}"></div>`,
                de = Y.dy`<div class="clear-container cc-pa" style="${e => "" !== e.value ? "" : "display: none"}"><fluent-button class="clear-btn" id="clear_srch" data-targetid="ClearSearchButton" appearance="stealth" title=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.clearButtonTitle} aria-label=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.clearButtonTitle} data-customhandled="true" @click="${(e, t) => e.clearSearch(t.event)}" @keypress=${(e, t) => e.clearSearch(t.event)} data-t="${e => e.clearTelemetryTag}" icon-only>${Y.dy.partial(ie())}</fluent-button></div>`,
                le = Y.dy`<button slot="search-options" class= ${e => {
                    var t;
                    return "voice-search " + (null !== (t = e.options) && void 0 !== t && t.disableDarkTheme ? "disable-dk" : "")
                }} id="voice_srch_go" data-targetid="VoiceSearchButton" title=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.voiceButtonTitle} aria-label=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.voiceButtonTitle} type="button" data-t="${e => e.voiceSearchButtonTelemetryTag}" data-customhandled="true" @click=${(e, t) => e.onVoiceSearchClick(t.event)} @keypress=${(e, t) => e.onVoiceSearchClick(t.event)}>${Y.dy.partial(ee())}</button>`,
                pe = Y.dy` ${e => {
                    var t;
                    return e.options && (null === (t = e.options.childExperienceReferencesWC) || void 0 === t ? void 0 : t.VoiceSearchWC) && (0, Q.Ot)(e.options && e.options.childExperienceReferencesWC.VoiceSearchWC, {
                        properties: {
                            voiceSearchCancelCallback: e.voiceSearchCancelCallback,
                            voiceSearchSubmitCallback: e.voiceSearchSubmitCallback,
                            openDialog: e.openVoiceSearchDialog
                        }
                    })
                }} `, ue = Y.dy` ${e => {
                    var t;
                    return e.options && (null === (t = e.options.childExperienceReferencesWC) || void 0 === t ? void 0 : t.ImageSearchWC) && (0, Q.Ot)(e.options && e.options.childExperienceReferencesWC.ImageSearchWC, {
                        properties: {
                            imageSearchCancelCallback: e.imageSearchCancelCallback,
                            openDialog: e.openImageSearchDialog,
                            destinationUrl: e.options.searchActionUrl
                        }
                    })
                }}
`, me = Y.dy` ${e => {
                    var t;
                    return e.options && (null === (t = e.options.childExperienceReferencesWC) || void 0 === t ? void 0 : t.CommonAutoSuggest) && (0, Q.Ot)(e.options && e.options.childExperienceReferencesWC.CommonAutoSuggest, {
                        properties: {
                            formElement: e.formElement,
                            inputElement: e.inputElement,
                            contextualSuggestions: e.contextualSuggestions
                        }
                    })
                }}
`, ge = Y.dy`<div class="image-srch-container" slot="search-options"><fluent-button class="image-search ${e => {
                    var t;
                    return null !== (t = e.options) && void 0 !== t && t.disableDarkTheme ? "disable-dk" : ""
                }}" id="image_srch_go" data-targetid="ImageSearchButton" appearance="stealth" title=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.imageButtonTitle} aria-label=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.imageButtonTitle} data-t="${e => e.imageSearchButtonTelemetryTag}" data-customhandled="true" icon-only @click=${(e, t) => e.onImageSearchClick(t.event)} @keypress=${(e, t) => e.onImageSearchClick(t.event)}>${Y.dy.partial(oe())}</fluent-button>${(0, K.g)((e => e.options && e.isImageSearchLoaded), ue)}</div>`,
                he = Y.dy`<div class="bing-as-upsell-container"><button class="bing-as-upsell" id="bing-as-upsell" title=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.codexBingTitle} aria-label=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.codexBingTitle} @click=${(e, t) => e.onCodexBingClick(t.event)} data-targetid="BingASUpsell" data-t="${e => e.bingASUpsellTelemetryTag}"><div class="cbas-icon"><img src=${() => `${(0, c.Yq)().StaticsUrl}latest/common/icons/copilot_color.svg`} alt=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.codexBingTitle}></div><div class="cbas-description">${e => e.options && e.options.localizedStrings && e.options.localizedStrings.codexBingASDescription}</div><div class="cbas-link">${e => e.options && e.options.localizedStrings && e.options.localizedStrings.codexBingASLinkTitle}</div></button></div>`,
                fe = Y.dy`<fluent-option class="scope-fluent-option" style="${(e, t) => t.parent.selectedScope == e ? "display:none;" : ""}" title="${(e, t) => e}" value="${e => e}" data-t=${(e, t) => t.parent.injectSearchSelectOptionTelemetry(e)}>${e => e}</fluent-option>`,
                be = Y.dy`<fluent-select class="scope-search-select" slot="scope-search" tab-index="0" current-value=${e => e.selectedScope} @click=${(e, t) => e.handleScopeSelectClick(t.event)} @change=${(e, t) => e.handleFluentSelectChange(t.event)} data-t=${e => e.selectBoxTelemetryTag}><span slot="selected-value">${e => e.selectedScope}</span>${(0, J.rx)(((e, t) => {
                    var o;
                    return Object.keys(e.options && (null === (o = e.options.searchScopeSelectConfig) || void 0 === o ? void 0 : o.selectOptions) || {})
                }), fe)}</fluent-select>`, ve = Y.dy`${e => e.searchIcon}`, xe = Y.dy`${Y.dy.partial(re())}`,
                ye = Y.dy`<fluent-button class="search-btn" part="button" title=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.buttonText} aria-label=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.buttonText} appearance="${e => e.searchButtonOnLeft ? "stealth" : "accent"}" @click="${e => e.onSubmit()}" @keypress="${e => e.onSubmit()}" data-t="${e => e.buttonTelemetryTag}" data-customhandled="true" icon-only>${e => e.searchIcon ? ve : xe}</fluent-button>`,
                _e = Y.dy`<div class="core ${e => e.searchButtonOnLeft ? "search-btn-on-left" : "search-btn-on-right"} ${e => {
                    var t, o;
                    return null !== (t = e.options) && void 0 !== t && t.enhanceUXMode ? null === (o = e.options) || void 0 === o ? void 0 : o.enhanceUXMode : ""
                }} ${e => {
                    var t;
                    return null !== (t = e.options) && void 0 !== t && t.showCodexBingIcon ? "core-bing-chat" : ""
                }} ${e => {
                    var t;
                    return null !== (t = e.options) && void 0 !== t && t.enableCodexBingIconStyles ? "core-info-bc" : ""
                }} ${e => {
                    var t;
                    return null !== (t = e.options) && void 0 !== t && t.enableDoublePane ? "wd_search" : ""
                }}" part="searchcore"><slot name="search-options-left"></slot>${(0, K.g)((e => e.options && e.options.showSearchScopeSelectDropdownBox && e.options.searchScopeSelectConfig && !e.isMobile()), be)} ${e => e.searchButtonOnLeft ? ye : ""}<input class="control ${e => {
                    var t;
                    return null !== (t = e.options) && void 0 !== t && t.disableDarkTheme ? "disable-dk" : ""
                }}" type="search" id="q" title=${e => e.options && e.options.localizedStrings && e.options.localizedStrings.inputTitle} name="q" @input=${e => e.handleTextInput()} @focus=${e => e.inputOnFocus()} @blur=${e => e.inputOnBlur()} @keypress=${(e, t) => e.onKeypress(t.event)} @click=${e => e.inputOnClick()} @keyup=${(e, t) => e.onKeyUp(t.event)} aria-label="${e => e.options && e.options.localizedStrings && e.options.localizedStrings.inputTitle}" placeholder=${e => e.getPlaceholder} autocomplete="off" maxlength="250" ${(0, X.i)("inputElement")} :value="${e => e.value}" data-t="${e => e.inputTelemetryTag}" data-customhandled="true" />${de} ${(0, K.g)((e => e.options && e.options.showVoiceSearchButton && !e.options.searchScopeSelectConfig), le)} ${(0, K.g)((e => e.options && e.options.childExperienceReferencesWC && e.options.childExperienceReferencesWC.ImageSearchWC), ge)}<slot name="search-options"></slot>${e => e.searchButtonOnLeft ? "" : ye}</div>`,
                we = Y.dy`<form ${(0, X.i)("formElement")} id="srchfrm" role="search" part="root" action=${e => e.searchActionUrl} target=${e => e.options && e.options.target || "_self"} method="get" data-customhandled="true" data-clarity-mask=${e => e.options && e.options.enableClarity} data-t="${e => e.searchBoxTelemetryTags}" class=${e => `form ${e.searchVisible ? "" : "search-hidden"} ${e.isNextWordASMode ? "nwas" : "as"} ${e.autosuggestShown || e.showAPIAutoSuggestBox ? "autosuggestShown" : ""}`}>${_e}<slot name="codex-bing-chat"></slot>${(0, K.g)((e => {
                    var t, o;
                    return (e.autosuggestShown || e.showAPIAutoSuggestBox) && !e.isNextWordASMode && (null === (t = e.options) || void 0 === t ? void 0 : t.showCodexBingASUpsell) && (null === (o = e.options) || void 0 === o ? void 0 : o.codexBingUrl)
                }), he)}<slot></slot>${(0, K.g)((e => e.options && e.options.showVoiceSearchButton && e.isVoiceSearchLoaded), pe)} ${(0, J.rx)((e => e.formParameters), se)} ${(0, K.g)((e => e.fakeFocused), ce)} ${(0, K.g)((e => e.enableLoadAPIAutoSuggestBox), me)}</form>`;
            var Se = o(84030), ke = o(63070), Ce = o(18449), Pe = o(79659), Te = o(45900);
            Se.D.define(ke.H.registry), Ce.D.define(ke.H.registry), Pe.D.define(ke.H.registry), Te.D.define(ke.H.registry);
            const Be = C.compose({
                name: "cs-common-search-box",
                template: we,
                styles: q,
                shadowOptions: {delegatesFocus: !0}
            })
        }, 47507: function (e, t, o) {
            "use strict";
            o.d(t, {
                q: function () {
                    return k
                }
            });
            var n = o(33940), r = o(28904), a = o(42590), i = o(67422);

            class s {
                constructor(e) {
                    this.response = e
                }

                get WebUrl() {
                    var e;
                    return null === (e = this.response) || void 0 === e ? void 0 : e.webUrl
                }
            }

            var c = o(4397), d = o(72626), l = o(75120);
            const p = {id: i.o2.Graph, friendlyName: i.H2.Graph};

            async function u() {
                const e = new URL("https://graph.microsoft.com/v1.0/sites/root");
                e.searchParams.append("$select", "webUrl");
                const t = (0, d.pW)();
                return function (e) {
                    if (!e || 200 !== e.status) return null;
                    const t = new s(e.content);
                    return t
                }(await (0, c.h)({
                    apiName: i.jf.SharePointSites,
                    name: "GetSiteRootUrl",
                    url: e,
                    headers: {"client-request-id": t, "content-type": "application/json"},
                    method: "GET",
                    authentication: p,
                    errors: {
                        authenticationError: l.Q$P,
                        authenticationProviderNotSupported: l.vC9,
                        authenticationUserInteractionRequired: l.g_R,
                        unhandledException: l.$S3,
                        tooManyRequests: l.h4Z,
                        unsuccessfulStatusCode: l.OyK,
                        unsupportedEnterpriseCloud: l.BW3
                    }
                }))
            }

            var m = o(20758);

            class g extends r.H {
                checkSVGImage() {
                    return this.image.indexOf("image/svg+xml") > -1 || this.image.indexOf(".svg") > -1
                }

                connectedCallback() {
                    var e, t;
                    super.connectedCallback(), this.imageElement = null === (e = this.shadowRoot) || void 0 === e || null === (t = e.getElementById) || void 0 === t ? void 0 : t.call(e, "company-logo");
                    const o = new Image;
                    o.onload = () => {
                        this.imageElement.setAttribute("width", o.width.toString()), this.imageElement.setAttribute("height", o.height.toString())
                    }, o.src = this.image, this.enableClickableCompanyLogo && this.fetchCompanyUrl().then((e => {
                        this.companySiteUrl = e
                    }))
                }

                async fetchCompanyUrl() {
                    return (await u()).WebUrl
                }

                onCompanyLogoClick() {
                    this.enableClickableCompanyLogo && ((0, m.Ay)()(), (0, m.Rc)()())
                }
            }

            (0, n.gn)([(0, a.Lj)({attribute: "companylogo-image"})], g.prototype, "image", void 0), (0, n.gn)([(0, a.Lj)({
                mode: "boolean",
                attribute: "backplate-image"
            })], g.prototype, "backplateImage", void 0), (0, n.gn)([(0, a.Lj)({
                mode: "boolean",
                attribute: "horizontal-flip"
            })], g.prototype, "horizontalFlip", void 0), (0, n.gn)([(0, a.Lj)({mode: "boolean"})], g.prototype, "showFullPageBlur", void 0), (0, n.gn)([(0, a.Lj)({attribute: "companySite-url"})], g.prototype, "companySiteUrl", void 0), (0, n.gn)([(0, a.Lj)({
                mode: "boolean",
                attribute: "enable-clickable-company-logo"
            })], g.prototype, "enableClickableCompanyLogo", void 0);
            var h = o(28632), f = o(22674), b = o(78923);
            const v = b.i`
.company-logo-backplate{left:88px}.company-logo-flip{left:initial !important;right:88px}`, x = b.i`
.company-logo-backplate{right:88px}.company-logo-flip{left:88px;right:initial !important}`,
                y = b.i` .company-logo-backplate{min-width:100px;background:${h.c1};border-radius:100px;justify-content:center;display:flex;padding:12px 17px}.company-logo-backplate.blurbg{background:rgba(0,0,0,0.3)}.company-logo-image{max-height:48px;max-width:180px;height:auto;width:auto;z-index:0}.company-logo-svg-image{max-height:24px;max-width:114px;height:24px;width:auto;z-index:0}`.withBehaviors(new f.O(v, x));
            var _ = o(49218), w = o(93703);
            const S = _.dy` ${(0, w.g)((e => e.backplateImage && e.enableClickableCompanyLogo && e.companySiteUrl), _.dy`<div class="company-logo-backplate ${e => e.horizontalFlip ? " company-logo-flip" : ""} ${e => e.showFullPageBlur ? "blurbg" : ""}"><a id="company-logo-url" href=${e => e.companySiteUrl} target="_blank"> <img id="company-logo" class=${e => e.checkSVGImage() ? "company-logo-svg-image" : "company-logo-image"} src='${e => e.image}' alt='No Image'></img></a></div>`)} ${(0, w.g)((e => e.backplateImage && e.enableClickableCompanyLogo && !e.companySiteUrl), _.dy`<div class="company-logo-backplate ${e => e.horizontalFlip ? " company-logo-flip" : ""} ${e => e.showFullPageBlur ? "blurbg" : ""}"><img id="company-logo" class=${e => e.checkSVGImage() ? "company-logo-svg-image" : "company-logo-image"} src='${e => e.image}' alt='No Image' @click=${e => e.onCompanyLogoClick()}></img></div>`)} ${(0, w.g)((e => e.backplateImage && !e.enableClickableCompanyLogo), _.dy`<div class="company-logo-backplate ${e => e.horizontalFlip ? " company-logo-flip" : ""} ${e => e.showFullPageBlur ? "blurbg" : ""}"><img id="company-logo" class=${e => e.checkSVGImage() ? "company-logo-svg-image" : "company-logo-image"} src='${e => e.image}' alt='No Image'></img></div>`)} ${(0, w.g)((e => !e.backplateImage && e.enableClickableCompanyLogo && e.companySiteUrl), _.dy`<a id="company-logo-url" href=${e => e.companySiteUrl} target="_blank"><img id="company-logo" class=${e => e.checkSVGImage() ? "company-logo-svg-image" : "company-logo-image"} src='${e => e.image}' alt='No Image'></img></a>`)} ${(0, w.g)((e => !e.backplateImage && e.enableClickableCompanyLogo && !e.companySiteUrl), _.dy`<img id="company-logo" class=${e => e.checkSVGImage() ? "company-logo-svg-image" : "company-logo-image"} src='${e => e.image}' alt='No Image'}" @click=${e => e.onCompanyLogoClick()}></img>`)} ${(0, w.g)((e => !e.backplateImage && !e.enableClickableCompanyLogo), _.dy`<img id="company-logo" class=${e => e.checkSVGImage() ? "company-logo-svg-image" : "company-logo-image"} src='${e => e.image}' alt='No Image'></img>`)}
`;
            let k = class extends g {
            };
            k = (0, n.gn)([(0, r.M)({name: "enterprise-company-logo", template: S, styles: y})], k)
        }, 7196: function (e, t, o) {
            "use strict";
            o.d(t, {
                S: function () {
                    return d
                }, s: function () {
                    return l
                }
            });
            var n = o(49218), r = o(20284), a = o(93703), i = o(43063), s = o(54556), c = o(87851);
            const d = n.dy`<div class="${e => (0, i.$H)(e.enableSafeAds, "ad-label")}"><a class="${e => (0, i.$H)(e.enableSafeAds, "ad-label-text")}" href="${e => e.privacyUrl}" @click="${(e, t) => !e.enableAdCardClickCbInAdSlug || !e.adCardClickCallback || e.adCardClickCallback(t.event, e.privacyUrl)}" target="${r.P._blank}" title="${e => e.localizedStrings && e.localizedStrings.nativeAdAdLabelText}" data-t="${e => {
                    var t;
                    return e.telemetryMetadata || (null === (t = e.adTelemetryContext) || void 0 === t || null === (t = t.adLabel) || void 0 === t ? void 0 : t.getMetadataTag())
                }}">${e => e.adLabelText}</a></div>`,
                l = n.dy`<div class="${e => (0, i.$H)(e.enableSafeAds, "ad-slug")}" slot="footer-start">${(0, a.g)((e => e.showAdLabel && e.adLabelText), d)} ${(0, a.g)((e => e.providerName && !e.enableAdCardProviderAlignment && !e.enableProviderAlignmentV2), n.dy`<div class="${e => (0, i.$H)(e.enableSafeAds, "ad-provider")}"><a class="${e => (0, i.$H)(e.enableSafeAds, "ad-provider-text")}" href="${e => e.destinationUrl}" target="${r.P._blank}" title="${e => e.providerName}" ${(0, s.lq)(!0, !1)} data-t="${e => {
                    var t;
                    return e.telemetryMetadata || (null === (t = e.adTelemetryContext) || void 0 === t || null === (t = t.destination) || void 0 === t ? void 0 : t.getMetadataTag())
                }}">${e => (0, c.vy)(e.providerName)}</a></div>`)}</div>`
        }, 65815: function (e, t, o) {
            "use strict";
            o.d(t, {
                Oj: function () {
                    return _
                }
            });
            var n = o(33940), r = o(75120), a = o(5480), i = o(42590), s = o(69425);
            let c = class extends a.F {
                constructor() {
                    super(...arguments), this.privacyUrl = "", this.id = "", this.adLabelText = "Ad", this.nativeAdAdLabelText = "", this.type = "greenLabel", this.isDynamicRendering = !0, this.shouldAdjustGap = !1, this.cardLayout = "default", this.telemetryMetadata = "", this.adLabelTextOpacity = "0.7", this.color = "var(--neutral-foreground-rest)", this.isFeedV2 = !1, this.isSeasonal = !1, this.isMsnHPAdSlug = !1, this.adLabelFontSize = "var(--type-ramp-minus-2-font-size)", this.enableSafeAds = !1
                }

                connectedCallback() {
                    super.connectedCallback()
                }
            };
            (0, n.gn)([(0, i.Lj)({attribute: "privacy-url"})], c.prototype, "privacyUrl", void 0), (0, n.gn)([i.Lj], c.prototype, "id", void 0), (0, n.gn)([(0, i.Lj)({attribute: "ad-label-text"})], c.prototype, "adLabelText", void 0), (0, n.gn)([(0, i.Lj)({attribute: "native-ad-ad-label-text"})], c.prototype, "nativeAdAdLabelText", void 0), (0, n.gn)([(0, i.Lj)({attribute: "type"})], c.prototype, "type", void 0), (0, n.gn)([(0, i.Lj)({
                mode: "boolean",
                attribute: "is-dynamic-rendering"
            })], c.prototype, "isDynamicRendering", void 0), (0, n.gn)([(0, i.Lj)({
                mode: "boolean",
                attribute: "should-adjust-gap"
            })], c.prototype, "shouldAdjustGap", void 0), (0, n.gn)([(0, i.Lj)({attribute: "layout"})], c.prototype, "layout", void 0), (0, n.gn)([(0, i.Lj)({attribute: "card-layout"})], c.prototype, "cardLayout", void 0), (0, n.gn)([(0, i.Lj)({attribute: "tel-metadata"})], c.prototype, "telemetryMetadata", void 0), (0, n.gn)([(0, i.Lj)({attribute: "ad-label-text-opacity"})], c.prototype, "adLabelTextOpacity", void 0), (0, n.gn)([(0, i.Lj)({attribute: "color"})], c.prototype, "color", void 0), (0, n.gn)([(0, i.Lj)({
                mode: "boolean",
                attribute: "is-feed-v2"
            })], c.prototype, "isFeedV2", void 0), (0, n.gn)([(0, i.Lj)({
                mode: "boolean",
                attribute: "is-seasonal"
            })], c.prototype, "isSeasonal", void 0), (0, n.gn)([(0, i.Lj)({
                mode: "boolean",
                attribute: "is-msn-hp-ad-slug"
            })], c.prototype, "isMsnHPAdSlug", void 0), (0, n.gn)([(0, i.Lj)({attribute: "ad-label-font-size"})], c.prototype, "adLabelFontSize", void 0), (0, n.gn)([(0, i.Lj)({attribute: "enable-safe-ads"})], c.prototype, "enableSafeAds", void 0), c = (0, n.gn)([(0, s.uj)(r.EoX, "msn-native-ad-ad-label")], c);
            var d = o(28904), l = o(90752), p = o(3204), u = o(78923), m = o(43063), g = o(69059);
            const h = u.i` .native-ad-label-dr-wrapper,.${(0, m.lj)("native-ad-label-dr-wrapper")}{--ad-label-fill-grey:#595959;--ad-label-color-grey:#FFF;--ad-label-fill-green:#1E6525;--ad-label-color-white:#FFF;--outline-width:1;--control-corner-radius:2;outline:none;pointer-events:auto;font-family:var(--body-font);font-size:var(--type-ramp-minus-2-font-size);display:flex}.ndr,.gap{margin-inline-end:8px}.native-ad-label-dr,.${(0, m.lj)("native-ad-label-dr")}{box-sizing:border-box;padding:0 6px;display:inline-block;line-height:14px;border-radius:calc(var(--control-corner-radius) * 1px);text-decoration:none;border:calc(var(--stroke-width) * 1px) solid transparent}.grey{background:var(--ad-label-fill-grey);color:var(--ad-label-color-grey)}.green{background:var(--ad-label-fill-green);color:var(--ad-label-color-white)}.white{background:white;color:lightgrey;border:calc(var(--stroke-width) * 1px) solid white}.transparent-infopane{color:white;border:calc(var(--stroke-width) * 1px) solid white}.transparent-river{color:lightgrey;border:calc(var(--stroke-width) * 1px) solid lightgrey}.ad-badge-topsite{background:white;border:1px solid grey;border-radius:30px;color:grey;padding:0px 4px;text-decoration:none}.ad-label-topsite{box-sizing:border-box;display:inline-block;text-decoration:none;color:var(--top-site-color)}.ad-txt-small{font-size:9px;line-height:18px}.ad-slug1{color:var(--neutral-foreground-rest);border:0.5px solid var(--neutral-foreground-rest)}.ad-slug2{color:transparent;opacity:0.3;border:0.5px solid var(--neutral-foreground-rest);position:absolute}.ad-slug2-text.is-feed-v2-text::before{border-color:#292929}.ad-slug2-text.is-feed-v2-text{color:#292929}.ad-slug2-text.is-seasonal-style::before{border-color:#000000;opacity:1}.ad-slug2-text.is-seasonal-style{color:#000000}.ad-slug2-text:focus-visible{outline-offset:-2px}@media (prefers-color-scheme:dark){.ad-slug2-text.is-feed-v2-text::before{border-color:#FFFFFF}.ad-slug2-text.is-feed-v2-text{color:#FFFFFF}.ad-slug2-text.is-seasonal-style::before{border-color:#FFFFFF;opacity:1}.ad-slug2-text.is-seasonal-style{color:#FFFFFF}}${g.f1} @media (forced-colors:active){.ad-slug .ad-label,.${(0, m.lj)(".ad-slug")} .${(0, m.lj)(".ad-label")}{border:0.5px solid buttontext;opacity:1}.ad-slug .ad-label-text,.${(0, m.lj)(".ad-slug")} .${(0, m.lj)(".ad-label-text")}{color:buttontext;opacity:1;background:buttonface}.ad-slug .ad-provider-text,.${(0, m.lj)(".ad-slug")} .${(0, m.lj)(".ad-provider-text")}{color:buttontext;opacity:1;background:buttonface}}`.withBehaviors(new l.g("layoutStyle"), new p.j(["adLabelTextOpacity", "color", "adLabelFontSize"], (e => u.i` .ad-slug2-text{--control-corner-radius:4;position:relative;padding:1px 5px;text-decoration:none;line-height:16px;opacity:${e.adLabelTextOpacity};color:${e.color};font-size:${e.adLabelFontSize}px}.ad-slug2-text::before{content:"";width:100%;height:100%;position:absolute;top:0;left:0;opacity:0.3;box-sizing:border-box;border-radius:calc(var(--control-corner-radius) * 1px);border:0.5px solid ${e.color}}.is-msn-hp-style{color:#2b2b2b;font-weight:400;font-size:11px;margin-inline-end:6px}.is-msn-hp-style::before{border:0.5px solid #2b2b2b}@media (forced-colors:active){.ad-slug2-text::before{border:0.5px solid buttontext;opacity:1}.ad-slug2-text{color:buttontext;opacity:1;background:buttonface}}`)));
            var f, b = o(49218), v = o(93703), x = o(7196);
            !function (e) {
                e.default = "default", e.condensed = "condensed", e.infoPane = "infoPane", e.infoPane1x3y = "infoPane1x3y", e.infoPaneSplitVertical = "infoPaneSplitVertical", e.infoPaneSplitHorizontal = "infoPaneSplitHorizontal"
            }(f || (f = {}));
            const y = b.dy` ${(0, v.g)((e => e.type), b.dy` ${(0, v.g)((e => "greyLabel" === e.type), b.dy`<div class="${e => (0, m.$H)(e.enableSafeAds, "native-ad-label-dr-wrapper")}"><a class="${e => (0, m.$H)(e.enableSafeAds, "native-ad-label-dr")} grey ${e => e.shouldAdjustGap ? "gap" : ""}" href="${e => e.privacyUrl}" target="_blank" title="${e => e.nativeAdAdLabelText}" data-t="${e => e.telemetryMetadata}">${e => e.adLabelText}</a></div>`)} ${(0, v.g)((e => "greenLabel" === e.type), b.dy`<div class="${e => (0, m.$H)(e.enableSafeAds, "native-ad-label-dr-wrapper")}"><a class="${e => (0, m.$H)(e.enableSafeAds, "native-ad-label-dr")} green ${e => e.shouldAdjustGap ? "gap" : ""}" href="${e => e.privacyUrl}" target="_blank" title="${e => e.nativeAdAdLabelText}" data-t="${e => e.telemetryMetadata}">${e => e.adLabelText}</a></div>`)} ${(0, v.g)((e => "defaultLabel" === e.type), b.dy`<div class="${e => (0, m.$H)(e.enableSafeAds, "ad-slug")}">${x.S}</div>`)} ${(0, v.g)((e => "topSiteAdTxtSmall" === e.type), b.dy`<div class="${e => (0, m.$H)(e.enableSafeAds, "native-ad-label-dr-wrapper")}"><a class="ad-label-topsite ad-txt-small" href="${e => e.privacyUrl}" target="_blank" title="${e => e.nativeAdAdLabelText}" data-t="${e => e.telemetryMetadata}">${e => e.adLabelText}</a></div>`)} `)}
`;
            let _ = class extends c {
            };
            _ = (0, n.gn)([(0, d.M)({name: "msn-native-ad-ad-label", template: y, styles: h})], _)
        }, 5362: function (e, t, o) {
            "use strict";
            o.d(t, {
                J0: function () {
                    return r
                }, Vy: function () {
                    return a
                }, pl: function () {
                    return i
                }
            });
            let n = !1;
            const r = e => e.hoverState && !e.hoverState.isHovered && e.hoverState.isDecorationLinesExpanded ? 65 : 25,
                a = (e, t) => {
                    e.hoverState && e.hoverState.isDecorationLinesExpanded !== t && (e.hoverState.isDecorationLinesExpanded = t)
                }, i = async e => {
                    var t, r;
                    if (n) return;
                    n = !0;
                    let a = [];
                    return (null != e && null !== (t = e.adTemplateConfig) && void 0 !== t && t.configType || null != e && null !== (r = e.adTemplateConfig) && void 0 !== r && r.allowedAssets) && (a = a.concat([o.e("nas-highlight-v3v4").then(o.bind(o, 88432))])), a = a.concat([Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("nativeadstemplates")]).then(o.bind(o, 56717)), Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("nativeadstemplates")]).then(o.bind(o, 24048)), Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("nativeadstemplates")]).then(o.bind(o, 66844)), Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("nativeadstemplates")]).then(o.bind(o, 5625)), Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("nativeadstemplates")]).then(o.bind(o, 96079))]), await Promise.all(a)
                }
        }, 5480: function (e, t, o) {
            "use strict";
            o.d(t, {
                F: function () {
                    return d
                }
            });
            var n = o(33940), r = o(28904), a = o(78923), i = o(99452), s = o(15293);
            const c = new Map([["flex", "MsnFlexLayout"], ["pixel", "MsnPixelLayout"], ["block", "MsnBlockLayout"]]);

            class d extends r.H {
                constructor() {
                    super(...arguments), this._displayName = "MsnUberLayout"
                }

                connectedCallback() {
                    var e;
                    super.connectedCallback();
                    const t = null === (e = this.layoutConfig) || void 0 === e ? void 0 : e.mode;
                    if (c.has(t) && c.get(t) !== this._displayName) return;
                    const o = Object.keys(this.layoutConfig || {}).filter((e => "mode" !== e)).map((e => {
                        var t;
                        return (0, s._t)(e, null === (t = this.layoutConfig) || void 0 === t ? void 0 : t[e])
                    })).filter((e => "" !== e));
                    this.layoutStyle = a.i`${o.length > 0 ? `:host {${o.join(";")}}` : ""}`
                }
            }

            (0, n.gn)([i.LO], d.prototype, "layoutConfig", void 0), (0, n.gn)([i.LO], d.prototype, "layoutStyle", void 0)
        }, 61421: function (e, t, o) {
            "use strict";
            o.d(t, {
                W: function () {
                    return J
                }
            });
            var n = o(77615), r = o(49218), a = o(93703), i = o(41472), s = o(66794), c = o(7275), d = o(31558),
                l = o(93590);
            const p = r.dy` ${(0, a.g)((e => e.startSection), r.dy` ${e => e.startSection.waffleRef && (0, c.Ot)(e.startSection.waffleRef, {
                    properties: {
                        showFullPageBlur: e.showFullPageBlur,
                        needDarkThemeIcons: e.needDarkThemeIcons
                    }, ttvrMarkerAggregate: "Header"
                })} ${(0, a.g)((e => e.startSection.enableMSBranding), r.dy`<a id="microsoftBrandingHolder" aria-label="Microsoft start" title="${e => e.startSection.brandingTitle || ""}" class="${e => e.microsoftBrandingClassName}" data-t="${e => e.getMsBrandingTelemetryTag()}" @click=${e => e.onLogoClick()} @keypress=${e => e.onLogoClick()} href=${e => e.startSection.brandingHref || ""} target="_blank" role="link" tabindex="0" style=${() => `--mslogo-dark: url(${(0, l.Yq)().StaticsUrl}/latest/icons-wc/icons/MicrosoftStartLogo_dark.svg);--mslogo-light: url(${(0, l.Yq)().StaticsUrl}/latest/icons-wc/icons/MicrosoftStartLogo_light.svg);`}><span class="microsoftStartLogo"></span></a>`)} ${(0, a.g)((e => e.startSection.enableCompanyLogo), r.dy`<enterprise-company-logo data-t="${e => e.getCompanyLogoTelemetryTag()}" :image=${e => e.startSection.companyLogoImage} :backplateImage=${e => e.startSection.showcompanyLogoBackplate || e.showFullPageBlur || e.needDarkThemeIcons} :horizontalFlip=${e => !0} :showFullPageBlur=${e => e.showFullPageBlur} :enableClickableCompanyLogo=${e => e.startSection.enableClickableCompanyLogo}></enterprise-company-logo>`)} `)}
`,
                u = r.dy` ${(0, a.g)((e => e.navSection.navRef), r.dy`<div class="header-nav">${e => e.navSection.navRef && (0, c.Ot)(e.navSection.navRef, {
                    properties: {
                        showPersonalizeButton: !1,
                        isImageHiddenAndNotDark: e.navSection.isImageHiddenAndNotDark
                    }, ttvrMarkerAggregate: "Header"
                })}</div>`)}
`, m = r.dy` ${e => e.endSection.marketLanguageToggleRef && (0, c.Ot)(e.endSection.marketLanguageToggleRef, {
                    properties: {
                        onMarketValueChange: e.endSection.onMarketValueChange,
                        localeMarket: e.endSection.localeMarket,
                        horizontalAligned: e.endSection.languageToggleHorizontalAlignment,
                        showFullPageBlur: e.showFullPageBlur,
                        needDarkThemeIcons: e.needDarkThemeIcons
                    }, ttvrMarkerAggregate: "Header"
                })}
`,
                g = r.dy` ${(0, a.g)((e => e.endSection), r.dy` ${e => e.endSection.marketLanguageToggleRef && m} ${e => e.endSection.signInControlRef && (0, c.Ot)(e.endSection.signInControlRef, {
                    properties: {
                        showFullPageBlur: e.showFullPageBlur,
                        needDarkThemeIcons: e.needDarkThemeIcons
                    }, ttvrMarkerAggregate: "Header"
                })} ${e => e.endSection.welcomeGreetingRef && (0, c.Ot)(e.endSection.welcomeGreetingRef, {
                    properties: {
                        rootMaxWidth: e.spaceForGreeting,
                        updateGreetingWidth: e.updateGreetingWidth,
                        showFullPageBlur: e.showFullPageBlur,
                        needDarkThemeIcons: e.needDarkThemeIcons
                    }, ttvrMarkerAggregate: "Header"
                })} ${e => e.endSection.mobileAppUpsellRef && (0, c.Ot)(e.endSection.mobileAppUpsellRef, {
                    properties: {
                        showFullPageBlur: e.showFullPageBlur,
                        needDarkThemeIcons: e.needDarkThemeIcons
                    }, ttvrMarkerAggregate: "Header"
                })} ${e => e.endSection.rewardsRef && (0, c.Ot)(e.endSection.rewardsRef, {
                    properties: {
                        showFullPageBlur: e.showFullPageBlur,
                        needDarkThemeIcons: e.needDarkThemeIcons
                    }, ttvrMarkerAggregate: "Header"
                })} ${e => e.endSection.notificationBellRef && (0, c.Ot)(e.endSection.notificationBellRef, {
                    properties: {
                        showFullPageBlur: e.showFullPageBlur,
                        needDarkThemeIcons: e.needDarkThemeIcons
                    }, ttvrMarkerAggregate: "Header"
                })} ${e => e.endSection.settingsRef && (0, c.Ot)(e.endSection.settingsRef, {
                    properties: {
                        showFullPageBlur: e.showFullPageBlur,
                        needDarkThemeIcons: e.needDarkThemeIcons
                    }, ttvrMarkerAggregate: "Header"
                })} ${e => e.endSection.signInControlAtTheEndRef && (0, c.Ot)(e.endSection.signInControlAtTheEndRef, {
                    properties: {
                        showFullPageBlur: e.showFullPageBlur,
                        usePhoenixStyles: !0,
                        needDarkThemeIcons: e.needDarkThemeIcons
                    }, ttvrMarkerAggregate: "Header"
                })} ${e => e.endSection.themePickerRef && (0, c.Ot)(e.endSection.themePickerRef, {ttvrMarkerAggregate: "Header"})} `)}
`, h = r.dy`
${(0, a.g)((e => e.searchSection), r.dy`<div class="header-search" ${(0, i.i)("search")} ${(0, s.XJ)()}>${e => e.searchSection.searchConfigRef && (0, c.Ot)(e.searchSection.searchConfigRef, {ttvrMarkerAggregate: "Header"})} ${(0, a.g)((() => !(0, d.N)()), (e => e.headerCoreTTVRTemplate))}</div>`)}
`, f = r.dy`
${(0, a.g)((e => e.searchSection), r.dy`<div class="below-search ${e => e.belowSearchSection && e.belowSearchSection.hideSearchHistory ? "hideSearchHistory" : ""}" ${(0, i.i)("belowSearch")} ${(0, s.XJ)()}>${e => r.dy` ${(0, a.g)((e => e.belowSearchSection && e.isTtvrFired), r.dy` ${e => e.belowSearchSection.searchHistoryRef && (0, c.Ot)(e.belowSearchSection.searchHistoryRef, {ttvrMarkerAggregate: "Header"})} ${e => e.belowSearchSection.newsHeadlineBelowSearchboxRef && (0, c.Ot)(e.belowSearchSection.newsHeadlineBelowSearchboxRef, {
                    properties: {isSeachHistoryEnabled: void 0 !== e.belowSearchSection.searchHistoryRef && null !== e.belowSearchSection.searchHistoryRef},
                    ttvrMarkerAggregate: "Header"
                })} `)}`}</div>`)}
`;
            var b = o(33940);
            const v = ["waffle-wc", "notification-bell"], x = ["#microsoftBrandingHolder", "enterprise-company-logo"],
                y = ["common-settings-edgenext", "notification-bell", "theme-picker"],
                _ = ["market-language-toggle", "mobile-app-upsell", "ms-rewards", "welcome-greeting", "welcome-greeting-light", "enterprise-company-logo", "sign-in-control"],
                w = ["market-language-toggle", "ms-rewards", "mobile-app-upsell", "welcome-greeting", "welcome-greeting-light", "enterprise-company-logo", "sign-in-control"];
            var S = o(99452), k = o(42590), C = o(23549), P = o(82898), T = o(40378), B = o(58616), A = o(45266),
                I = o(28904);

            class F extends I.H {
                constructor() {
                    super(...arguments), this.startItems = [], this.endItems = [], this.navItems = []
                }
            }

            var L = o(78951), R = o(37802), M = o(7124), N = o(21930);

            class E extends F {
                constructor() {
                    super(...arguments), this.topSitesInCenter = !1, this.spaceForGreeting = 0, this.showFullPageBlur = !1, this.needDarkThemeIcons = !1, this.itemGap = 0, this.greetingMaxWidth = 243, this.greetingMinWidth = 88, this.isTtvrFired = !1, this.setupResizeObserver = () => {
                        if (!("ResizeObserver" in window)) return;
                        const e = new window.ResizeObserver((0, R.Z)((e => {
                            this.updateStartSectionAppearance(), this.updateEndSectionAppearance()
                        }), 300));
                        this.core && e.observe(this.core), this.start && e.observe(this.start), this.end && e.observe(this.end)
                    }, this.updateStartSectionAppearance = () => {
                        if (!this.search || !this.topSitesHolder || !this.startItems || 0 === this.startItems.length) return;
                        const e = this.topSitesInCenter ? this.topSitesHolder : this.search,
                            t = Math.floor((this.core.offsetWidth - e.offsetWidth) / 2 - 24),
                            o = this.getRealItems(this.startItems, v), n = this.getRealItems(this.startItems, x);
                        let r = 0;
                        const a = [];
                        o.forEach((e => {
                            r += e.offsetWidth + (a.length > 0 ? this.itemGap : 0), a.push(e)
                        })), n.reverse().forEach((e => {
                            r += e.offsetWidth + (a.length > 0 ? this.itemGap : 0), r <= t && a.push(e)
                        })), this.startItems.forEach((e => {
                            a.includes(e) ? e.classList.remove("overflow") : e.classList.add("overflow")
                        }))
                    }, this.updateEndSectionAppearance = () => {
                        if (!this.search || !this.topSitesHolder || !this.endItems || 0 === this.endItems.length || 0 === this.core.offsetWidth) return;
                        if ((0, d.N)() && window.isSSREnabled && !this.endSection.signInControlRef) try {
                            const e = this.endItems.find((e => "SIGN-IN-CONTROL" === e.tagName));
                            null == e || e.remove(), C.M0.addOrUpdateTmplProperty("SignInControlRemoved", "1")
                        } catch (e) {
                        }
                        const e = this.topSitesInCenter ? this.topSitesHolder : this.search,
                            t = 0 + (!this.topSitesInCenter && this.searchSection.showCodexBingIcon ? 54 : 0),
                            o = Math.floor((this.core.offsetWidth - e.offsetWidth) / 2 - 24 - t),
                            n = this.endSection.rewardsHideFirst ? w : _, r = this.getRealItems(this.endItems, y),
                            a = this.getRealItems(this.endItems, n);
                        let i = 0;
                        const s = [];
                        if (r.forEach((e => {
                            i += e.offsetWidth + (s.length > 0 ? this.itemGap : 0), s.push(e)
                        })), a.reverse().forEach((e => {
                            const t = s.length > 0 ? this.itemGap : 0;
                            "WELCOME-GREETING" === e.tagName || "WELCOME-GREETING-LIGHT" === e.tagName ? (this.spaceForGreeting = Math.min(o - i - t, this.greetingMaxWidth), this.spaceForGreeting = Math.max(this.spaceForGreeting, this.greetingMinWidth), i += this.spaceForGreeting + t) : i += e.offsetWidth + t, i <= o && s.push(e)
                        })), this.endItems.forEach((e => {
                            var t;
                            ("MARKET-LANGUAGE-TOGGLE" !== e.tagName || null !== (t = this.endSection) && void 0 !== t && t.languageToggleHorizontalAlignment) && (s.includes(e) ? e.classList.remove("overflow") : e.classList.add("overflow"))
                        })), this.endSection.addMobOrRwdsHiddenTMPL && this.endSection.mobileAppUpsellRef && this.endSection.rewardsRef) {
                            const e = s.some((e => "MOBILE-APP-UPSELL" === e.tagName)),
                                t = s.some((e => "MS-REWARDS" === e.tagName));
                            this.addMobOrRwdsHiddenTMPL(e !== t)
                        }
                    }, this.updateGreetingWidth = (e, t) => {
                        e && this.greetingMinWidth !== Math.floor(e) && (this.greetingMinWidth = Math.floor(e)), t && this.greetingMaxWidth !== Math.ceil(t) && (this.greetingMaxWidth = Math.ceil(t))
                    }, this.getRealItems = (e, t) => t.map((t => e.find((e => e.matches(t))))).filter((e => !!e)), this.lowEndDeviceHandler = e => {
                        var t;
                        this.isLowEndDevice = (null == e || null === (t = e.detail) || void 0 === t ? void 0 : t.isLowEndDevice) ?? !1
                    }, this.addMobOrRwdsHiddenTMPL = (0, M.Z)(((e = !1) => {
                        C.M0.addOrUpdateTmplProperty("MobOrRewardsHidden", e ? "1" : "0")
                    }), 1e3)
                }

                get microsoftBrandingClassName() {
                    var e;
                    let t = "";
                    const o = (null === (e = this.chromiumPageSettingsState) || void 0 === e ? void 0 : e.currentLayout) == (null === A.nP || void 0 === A.nP ? void 0 : A.nP.informational) && this.isLowEndDevice;
                    return this.needDarkThemeIcons ? t += "dark-theme-icons" : (this.startSection.backgroundImageOn && !this.showFullPageBlur && !o || this.showFullPageBlur && (0, T.Y)()) && (t += "dark-background"), t
                }

                connectedCallback() {
                    super.connectedCallback(), (0, d.N)() && ((0, B.l_)(this).then((() => {
                        this.topSitesHolder = this.nextElementSibling, this.setupResizeObserver()
                    })), window.addEventListener("LowEndDeviceBkgd", this.lowEndDeviceHandler)), (0, N.b1)().then((() => {
                        this.isTtvrFired = !0
                    }))
                }

                disconnectedCallback() {
                    super.disconnectedCallback(), window.removeEventListener("LowEndDeviceBkgd", this.lowEndDeviceHandler)
                }

                getMsBrandingTelemetryTag() {
                    return new L.D({
                        name: "msBrandingLogo",
                        action: P.Aw.Click,
                        type: P.c9.ActionButton,
                        behavior: this.startSection.brandingHref ? P.wu.Navigate : P.wu.Refresh
                    }).getMetadataTag()
                }

                getCompanyLogoTelemetryTag() {
                    return new L.D({
                        name: "companyLogo",
                        action: P.Aw.Click,
                        type: P.c9.ActionButton,
                        behavior: P.wu.Navigate
                    }).getMetadataTag()
                }

                onLogoClick() {
                    var e;
                    if (null !== (e = this.startSection) && void 0 !== e && e.brandingHref) return !0;
                    location.reload()
                }
            }

            (0, b.gn)([S.LO], E.prototype, "startSection", void 0), (0, b.gn)([S.LO], E.prototype, "endSection", void 0), (0, b.gn)([S.LO], E.prototype, "navSection", void 0), (0, b.gn)([S.LO], E.prototype, "searchSection", void 0), (0, b.gn)([S.LO], E.prototype, "belowSearchSection", void 0), (0, b.gn)([S.LO], E.prototype, "chromiumPageSettingsState", void 0), (0, b.gn)([S.LO], E.prototype, "isLowEndDevice", void 0), (0, b.gn)([S.LO], E.prototype, "topSitesInCenter", void 0), (0, b.gn)([S.LO], E.prototype, "headerCoreTTVRTemplate", void 0), (0, b.gn)([S.LO], E.prototype, "spaceForGreeting", void 0), (0, b.gn)([k.Lj], E.prototype, "showFullPageBlur", void 0), (0, b.gn)([S.LO], E.prototype, "needDarkThemeIcons", void 0), (0, b.gn)([S.LO], E.prototype, "isTtvrFired", void 0), (0, b.gn)([S.lk], E.prototype, "microsoftBrandingClassName", null);
            var $ = o(99026), D = o(95185);
            var j = o(50632), H = o(78923), U = o(29717), O = o(22674);
            const W = H.i` :host{display:flex;justify-content:center;--header-offset:0px;--header-top-margin:32px;--header-height:46px;--header-inline-margin:24px}.header-core{left:0px;width:100%;height:var(--header-height);box-sizing:border-box;padding:0 var(--header-inline-margin);display:grid;align-items:center;justify-content:center;grid-template:auto / repeat(3,1fr)}.header_hidden{opacity:0;transition:opacity 0.2s}.header-search,::slotted([slot="search"]){height:var(--header-height);grid-row:1;grid-column:1 / 4;justify-self:center}.below-search{position:absolute;flex:1;margin-top:46px}::slotted([slot="start"]),.header-start{position:fixed;top:calc(var(--header-offset) + var(--header-top-margin));width:fit-content;height:var(--header-height);grid-area:1 / 1 / auto / auto;justify-self:start;align-items:center;display:flex;gap:0px}::slotted([slot="nav"]),.header-nav{position:absolute;top:calc(var(--header-offset) + var(--header-top-margin));height:var(--header-height);grid-area:1 / 1 / auto / 4;justify-self:center;align-items:center;justify-content:center;display:flex;gap:12px}::slotted([slot="end"]),.header-end{position:fixed;top:calc(var(--header-offset) + var(--header-top-margin));width:fit-content;height:var(--header-height);grid-area:1 / 3 / auto / auto;justify-self:end;justify-content:flex-end;align-items:center;display:flex;gap:0px}`,
                z = H.i` :host{--subtle-background-hover:rgba(255,255,255,6.05%)}:host([showFullPageBlur="true"]){--subtle-background-hover:rgba(0,0,0,0.3)}.microsoftStartLogo{background:var(--mslogo-dark) no-repeat center}.dark-theme-icons .microsoftStartLogo{background:var(--mslogo-light) no-repeat center}`,
                G = H.i` .header-start{left:var(--header-inline-margin)}.header-end{right:var(--header-inline-margin)}.header-end welcome-greeting-light::part(wea-popup-area),.header-end welcome-greeting::part(wea-popup-area),.header-end welcome-greeting::part(visible-hovercard-container){left:initial;right:0}`,
                V = H.i` .header-start{right:var(--header-inline-margin)}.header-end{left:var(--header-inline-margin)}.header-end welcome-greeting-light::part(wea-popup-area),.header-end welcome-greeting::part(wea-popup-area),.header-end welcome-greeting::part(visible-hovercard-container){left:0;right:initial}`,
                q = H.i` ${W} :host{width:100%;--header-height:46px;--header-top-margin:32px;--subtle-background-hover:rgba(0,0,0,3.92%)}:host([showFullPageBlur="true"]){--subtle-background-hover:rgba(229,229,229,0.3)}:host(.search-sticky) .header-core{position:fixed;top:calc(var(--header-offset) + var(--header-top-margin));z-index:1}:host(.search-sticky) .header-start,:host(.search-sticky) .header-end{position:unset;top:unset}.hideSearchHistory news-headline-below-searchbox,.hideSearchHistory search-history-edgenext{visibility:hidden}:host(.hide-search-box) common-search-box-edgenext{display:none}:host(.hide-search-box) .below-search{display:none}enterprise-company-logo{padding-inline:8px}#microsoftBrandingHolder{cursor:pointer;display:flex;padding-top:10px;padding-inline:8px;padding-bottom:10px}.microsoftStartLogo{width:133px;height:20px;background:var(--mslogo-light) no-repeat center}.dark-background .microsoftStartLogo{background:var(--mslogo-dark) no-repeat center}.overflow{visibility:hidden;position:absolute}${(0, j.vW)(null, j.K$.c1)}{.header-core{grid-template:repeat(2,auto) / repeat(3,1fr)}:host(.search-sticky) .header-core{position:absolute;top:var(--header-offset)}.header-search,::slotted([slot="search"]){height:var(--header-height);justify-self:center;grid-area:2 / 1 / auto / 4}.header-start,.header-end,.header-nav{position:absolute;top:var(--header-offset);height:32px}}${(0, j.eH)(j.K$.c2)}{:host(.bing-chat) .header-start{position:absolute;top:-24px;height:32px}:host(.bing-chat) .header-end{position:absolute;top:-24px;height:32px}:host(.bing-chat.translucent) .header-start{top:0px}:host(.bing-chat.translucent) .header-end{top:0px}}`.withBehaviors(new O.O(G, V), (0, U.Uu)(z)),
                Y = E.compose({
                    name: "cs-header-core",
                    template: (K = {
                        start: p,
                        end: g,
                        nav: u,
                        search: h,
                        belowSearch: f
                    }, r.dy`<div class="header-core" part="core" ${(0, i.i)("core")}>${K.search ?? r.dy`<slot name="search"></slot>`}<div class="header-start" ${(0, i.i)("start")} ${(0, $.N)({
                        property: "startItems",
                        filter: (0, D.R)()
                    })}>${K.start ?? r.dy`<slot name="start"></slot>`}</div>${K.nav ?? r.dy`<slot name="nav"></slot>`}<div class="header-end" ${(0, i.i)("end")} ${(0, $.N)({
                        property: "endItems",
                        filter: (0, D.R)()
                    })}>${K.end ?? r.dy`<slot name="end"></slot>`}</div></div>${K.belowSearch ?? r.dy`<slot name="below-search"></slot>`}<slot></slot>`),
                    styles: q
                });
            var K;
            const J = () => {
                Y.define(n.s.registry)
            }
        }, 1591: function (e, t, o) {
            "use strict";
            o.d(t, {
                Z: function () {
                    return y
                }
            });
            var n = o(33940), r = o(45900), a = o(63070);
            var i = o(28904), s = o(99452), c = o(42590);

            class d extends i.H {
                constructor() {
                    super(...arguments), this.hasAction = !1, this.hideOverflowText = !1, this.focusBack = !0
                }

                connectedCallback() {
                    super.connectedCallback();
                    let e = document.activeElement;
                    for (; null !== (t = e) && void 0 !== t && null !== (t = t.shadowRoot) && void 0 !== t && t.activeElement;) {
                        var t;
                        e = e.shadowRoot.activeElement
                    }
                    this.lastActiveElement = e
                }

                disconnectedCallback() {
                    super.disconnectedCallback(), this.focusBack && this.lastActiveElement.focus()
                }

                handleActionAdded() {
                    this.actions.assignedNodes().length > 0 ? this.hasAction = !0 : this.hasAction = !1
                }
            }

            (0, n.gn)([s.LO], d.prototype, "hasAction", void 0), (0, n.gn)([(0, c.Lj)({mode: "boolean"})], d.prototype, "hideOverflowText", void 0), (0, n.gn)([s.LO], d.prototype, "focusBack", void 0);
            var l = o(78923), p = o(27782), u = o(55135), m = o(79148), g = o(62734), h = o(27186);
            const f = l.i` ${(0, h.j)("flex")} :host{font-weight:400;font-size:${p.c};line-height:${p.R};--elevation:4}.toast-root{width:fit-content;max-width:var(--toast-max-width,420px);min-height:48px;height:fit-content;border-radius:calc(${u.rS} * 1px);background:${m.RJ};box-sizing:border-box;display:flex;${g.XC}}.text-overflow{display:inline-block;max-width:var(--toast-message-max-width,200px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.content-container{margin-inline-start:16px;margin-top:8px;margin-bottom:8px;display:flex;flex:1;flex-wrap:wrap;align-items:center;min-width:0}.content-container span{text-overflow:ellipsis;overflow:hidden}.close-button{margin:8px}.with-action{margin-inline-end:13px}`;
            var b = o(49218), v = o(41472);
            const x = b.dy`<div class="toast-root" part="toast-root" tabindex="0"><div class="content-container" part="toast-content"><span class="${e => e.hasAction ? "with-action" : ""} ${e => e.hideOverflowText ? "text-overflow" : ""}"><slot></slot></span><span><slot name="actions" ${(0, v.i)("actions")} @slotchange=${e => e.handleActionAdded()}></slot></span></div><div class="close-button"><slot name="close-button"></slot></div></div>`;
            let y = class extends d {
            };
            y = (0, n.gn)([(0, i.M)({
                name: "msn-toast",
                template: x,
                styles: f,
                shadowOptions: {delegatesFocus: !0}
            })], y), r.D.define(a.H.registry)
        }, 16818: function (e, t, o) {
            "use strict";
            o.d(t, {
                X: function () {
                    return k
                }
            });
            var n = o(33940), r = o(45900), a = o(63070), i = o(16148), s = o(22391);
            var c = o(28904), d = o(31699), l = o(42590), p = o(99452);

            class u extends c.H {
                saveTopSite() {
                    this.$emit("save", this.newOrUpdatedTopSite), this.resetInputs()
                }

                closeTopSiteDialog() {
                    this.$emit("close"), this.resetInputs()
                }

                closeButtonHandler(e) {
                    var t, o;
                    let n;
                    const r = (null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.host) && this.shadowRoot.host.id,
                        a = (null === (o = this.shadowRoot) || void 0 === o ? void 0 : o.activeElement) && this.shadowRoot.activeElement.id;
                    "Enter" === e.key || " " === e.key ? this.closeTopSiteDialog() : "Tab" === e.key ? "closeButton" === a && (n = e.shiftKey ? "topSiteAddDialog" === r && void 0 !== this.shadowRoot.querySelector("suggestion-title") ? this.shadowRoot.querySelector("suggestion-body")[-1] : this.shadowRoot.getElementById("Cancel") : this.shadowRoot.getElementById("nameInputControl")) : "Shift" === e.key && e.preventDefault(), n && (e.preventDefault(), d.S.queueUpdate((() => n.focus())))
                }

                nameInputKeyHandler(e) {
                    var t, o;
                    let n;
                    const r = (null === (t = this.shadowRoot) || void 0 === t ? void 0 : t.host) && this.shadowRoot.host.id,
                        a = (null === (o = this.shadowRoot) || void 0 === o ? void 0 : o.activeElement) && this.shadowRoot.activeElement.id;
                    "Tab" === e.key ? "nameInputControl" === a && (e.shiftKey ? n = this.shadowRoot.getElementById("closeButton") : "topSiteAddDialog" === r ? n = this.shadowRoot.getElementById("urlInputControl") : "topSiteEditDialog" === r && (n = this.shadowRoot.getElementById("Save"))) : "Shift" === e.key && e.preventDefault(), n && (e.preventDefault(), d.S.queueUpdate((() => n.focus())))
                }

                handleNameChange() {
                    this.nameInputControl && this.nameInputControl.value && (this.newOrUpdatedTopSite.name = this.nameInputControl.value)
                }

                handleUrlChange() {
                    this.urlInputControl && this.urlInputControl.value && (this.newOrUpdatedTopSite.url = this.urlInputControl.value)
                }

                resetInputs() {
                    this.urlInputControl && (this.urlInputControl.value = ""), this.nameInputControl && (this.nameInputControl.value = "")
                }
            }

            (0, n.gn)([l.Lj], u.prototype, "headerTitle", void 0), (0, n.gn)([l.Lj], u.prototype, "saveText", void 0), (0, n.gn)([l.Lj], u.prototype, "cancelText", void 0), (0, n.gn)([l.Lj], u.prototype, "closeText", void 0), (0, n.gn)([l.Lj], u.prototype, "addDialogSubHeading", void 0), (0, n.gn)([p.LO], u.prototype, "saveButtonTelemetryTag", void 0), (0, n.gn)([p.LO], u.prototype, "cancelButtonTelemetryTag", void 0), (0, n.gn)([p.LO], u.prototype, "closeButtonTelemetryTag", void 0), (0, n.gn)([p.LO], u.prototype, "nameInputData", void 0), (0, n.gn)([p.LO], u.prototype, "urlInputData", void 0), (0, n.gn)([p.LO], u.prototype, "newOrUpdatedTopSite", void 0);
            var m = o(42689), g = o(27460), h = o(22674), f = o(78923);
            const b = f.i` .close-button{left:auto;right:16px}`, v = f.i` .close-button{left:16px;right:auto}`,
                x = f.i` :host{--control-corner-radius:2;--dialog-z-index:0;--layer-corner-radius:4;position:relative}h1{cursor:default;font-weight:600;font-size:16px;line-height:24px;margin-top:0;margin-bottom:0;color:${m.C}}.dialog{--dialog-height:var(--top-site-dialog-height,auto);--dialog-width:var(--top-site-dialog-width,auto);position:absolute;z-index:var(--top-site-dialog-z-index);top:var(--dialog-top,auto);bottom:var(--dialog-bottom,auto);left:var(--dialog-left,auto);right:var(--dialog-right,auto)}.main-container{padding:12px 16px;display:grid;background-color:${g.s}}.header{display:grid;grid-template-columns:1fr auto;position:relative;width:100%}.close-button{position:absolute;min-width:24px;height:24px}.close-button::part(control){padding:0;margin:0}.close-button svg{width:10px;height:10px}.body{margin-top:4px;flex:1 1 0;font-size:12px;display:inline-flex;flex-direction:column;flex-wrap:wrap;gap:12px;color:${m.C};justify-content:space-between}.input-container{display:grid;line-height:16px}fluent-text-field::part(label){line-height:32px;margin-top:auto;margin-bottom:auto;width:40px;text-align:start}fluent-text-field::part(control){margin:0;transition:all 0.2s ease-in-out;line-height:20px;font-weight:400;padding:0 11px;border-radius:2px;height:32px}.footer-actions{justify-content:center;box-sizing:border-box;display:grid;grid-template-columns:var(--top-site-dialog-button-width,140px) var(--top-site-dialog-button-width,140px);grid-gap:8px;width:100%;margin-top:24px}fluent-dialog::part(positioning-region){position:var(--dialog-position,relative)}`.withBehaviors(new h.O(b, v));
            var y = o(49218), _ = o(93703), w = o(41472);
            const S = y.dy`<fluent-dialog @dismiss=${e => e.closeTopSiteDialog()} class="dialog" part="dialog" modal><div class="main-container"><div class="header"><h1 class="header-title">${e => e.headerTitle}</h1></div><div class="body" part="main-container-body">${(0, _.g)((e => e.nameInputData), y.dy`<div class="input-container"><fluent-text-field autofocus appearance="fill" tabindex="0" type="${e => e.nameInputData.type || "text"}" id="${e => e.nameInputData.id}" aria-label="${e => e.nameInputData.ariaLabel}" value="${e => e.nameInputData.value}" @input=${(e, t) => e.handleNameChange()} ${(0, w.i)("nameInputControl")}>${e => e.nameInputData.name}</fluent-text-field></div>`)} ${(0, _.g)((e => e.urlInputData), y.dy`<div class="input-container"><fluent-text-field tabindex="0" type="${e => e.nameInputData.type || "url"}" id="${e => e.urlInputData.id}" aria-label="${e => e.urlInputData.ariaLabel}" value="${e => e.urlInputData.value}" @input=${e => e.handleUrlChange()} ${(0, w.i)("urlInputControl")}>${e => e.urlInputData.name}</fluent-text-field></div>`)}</div><div class="footer-actions" part="main-container-footer-actions"><fluent-button appearance="neutral" tabindex="0" title=${e => e.saveText} id=${e => e.saveText} aria-label=${e => e.saveText} role="button" @click=${e => e.saveTopSite && e.saveTopSite()} @keypress=${e => e.saveTopSite && e.saveTopSite()} data-t="${e => e.saveButtonTelemetryTag}">${e => e.saveText}</fluent-button><fluent-button appearance="neutral" tabindex="0" title=${e => e.cancelText} id=${e => e.cancelText} aria-label=${e => e.cancelText} role="button" @click=${e => e.closeTopSiteDialog && e.closeTopSiteDialog()} @keypress=${e => e.closeTopSiteDialog && e.closeTopSiteDialog()} data-t="${e => e.cancelButtonTelemetryTag}">${e => e.cancelText}</fluent-button></div><slot name="subSection" ${(0, w.i)("subSection")}></slot><fluent-button id="closeButton" appearance="stealth" class="close-button" title=${e => e.closeText} aria-label=${e => e.closeText} role="button" @click=${e => e.closeTopSiteDialog && e.closeTopSiteDialog()} @keydown=${(e, t) => e.closeButtonHandler(t.event)} data-t="${e => e.closeButtonTelemetryTag}"><svg viewBox="0 0 16 16" width="16px" height="16px" xmlns="http://www.w3.org/2000/svg"><path d="M14.1016 1.60156L8.20312 7.5L14.1016 13.3984L13.3984 14.1016L7.5 8.20312L1.60156 14.1016L0.898438 13.3984L6.79688 7.5L0.898438 1.60156L1.60156 0.898438L7.5 6.79688L13.3984 0.898438L14.1016 1.60156Z"></path></svg></fluent-button></div></fluent-dialog>`;
            let k = class extends u {
            };
            k = (0, n.gn)([(0, c.M)({
                name: "msn-top-site-dialog",
                template: S,
                styles: x,
                shadowOptions: {delegatesFocus: !0}
            })], k), r.D.define(a.H.registry), i.D.define(a.H.registry), s.D.define(a.H.registry)
        }, 43730: function (e, t, o) {
            "use strict";
            o.d(t, {
                v: function () {
                    return h
                }
            });
            var n = o(33940), r = o(45900), a = o(63070);
            var i = o(28904), s = o(42590);

            class c extends i.H {
            }

            (0, n.gn)([(0, s.Lj)({mode: "boolean"})], c.prototype, "backPlateEnabled", void 0);
            var d = o(27460), l = o(35680), p = o(78923), u = o(27186);
            const m = p.i` ${(0, u.j)("inline-block")} :host{box-sizing:border-box;border-radius:4px;position:relative;justify-content:center;height:80px;width:104px;height:var(--top-site-height,80px);width:var(--top-site-width,104px)}.container{width:100%;height:100%}.back-plate-container{background:var(--top-site-placeholder-backplate-fill,${d.s});border-radius:4px;width:var(--top-site-black-plate-width,44px);height:var(--top-site-black-plate-height,44px);display:flex;justify-content:center;align-items:center;margin:10px auto}:host(:hover){background:var(--top-site-fill-hover,${l.Xi})}.icon-action{align-items:center;display:flex;height:100%;width:100%}::slotted([slot="icon-action"]){width:100%;height:100%}`;
            const g = o(49218).dy`<div class="${e => e.backPlateEnabled ? "back-plate-container" : "container"}" id="topSitePlaceHolder"><span part="icon-action" class="icon-action"><slot name="icon-action"></slot></span></div>`;
            let h = class extends c {
            };
            h = (0, n.gn)([(0, i.M)({
                name: "msft-top-site-placeholder",
                template: g,
                styles: m
            })], h), r.D.define(a.H.registry)
        }, 69059: function (e, t, o) {
            "use strict";
            o.d(t, {
                B2: function () {
                    return l
                }, dL: function () {
                    return d
                }, f1: function () {
                    return p
                }
            });
            var n = o(42689), r = o(16549), a = o(91290), i = o(78923), s = o(43063), c = o(99809);
            const d = i.i` .ad-slug,.${(0, s.lj)("ad-slug")}{align-items:center;color:${n.C};display:flex;flex-direction:row;line-height:${r.v};max-width:calc(${a.$f} * 1px - 100px);opacity:0.8;overflow:hidden}.ad-slug .ad-label,.${(0, s.lj)("ad-slug")} .${(0, s.lj)("ad-label")}{display:flex;align-items:center;border:0.5px solid rgba(26,26,26,.3);border-radius:4px;box-sizing:border-box;font-size:11px;height:16px;margin-inline-end:6px;min-width:22px;padding:1px 4px;overflow:hidden}.ad-slug .ad-label-text,.${(0, s.lj)("ad-slug")} .${(0, s.lj)("ad-label-text")}{color:inherit;pointer-events:auto;position:relative;text-decoration:none;z-index:1}.ad-slug .ad-provider,.${(0, s.lj)("ad-slug")} .${(0, s.lj)("ad-provider")}{flex:4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ad-slug .ad-provider-text,.${(0, s.lj)("ad-slug")} .${(0, s.lj)("ad-provider-text")}{color:inherit;font-size:${r.s};text-decoration:none;text-overflow:ellipsis;vertical-align:bottom}.ad-slug .ad-provider-text:focus-visible,.${(0, s.lj)("ad-slug")} .${(0, s.lj)("ad-provider-text")}:focus-visible{text-decoration:underline;outline-offset:-.79px;outline:-webkit-focus-ring-color auto 1px}[size="_2x_2y"] .ad-slug,[size="_2x_2y"] .${(0, s.lj)("ad-slug")}{max-width:calc(${a.$f} * 2px - 100px)}:host(.infopane-slide) .ad-slug .ad-label,[size="_2x_2y"] .ad-slug .ad-label,:host(.infopane-slide) .${(0, s.lj)("ad-slug")} .${(0, s.lj)("ad-label")},[size="_2x_2y"] .${(0, s.lj)("ad-slug")} .${(0, s.lj)("ad-label")}{border:0.5px solid rgba( 255,255,255,.3)}`,
                l = i.i` .ad-slug .ad-label,.${(0, s.lj)("ad-slug")} .${(0, s.lj)("ad-label")}{border:0.5px solid rgba(255,255,255,.3);opacity:0.9}`,
                p = i.i` ${d}
`.withBehaviors(new c.Y(null, l))
        }, 34833: function () {
            "undefined" != typeof window && window.performance && window.performance.mark("ClientInit")
        }, 57125: function (e, t, o) {
            "use strict";
            o(34833);
            var n = o(85205), r = o(79545), a = o(66701);
            const {registerExperience: i} = a.n;
            i(n.z.TelemetryData, (() => Promise.resolve().then(o.bind(o, 72009)))), i(n.z.TelemetryDataEdgeChromium, (() => Promise.resolve().then(o.bind(o, 72120)))), i(n.z.IrisData, (() => Promise.resolve().then(o.bind(o, 53621)))), i(n.z.ExperienceTrackerEdgeNextData, (() => Promise.resolve().then(o.bind(o, 59619)))), i(n.z.ChromiumPageSettings, (() => Promise.resolve().then(o.bind(o, 59131)))), i(n.z.SmartListSharedData, (() => Promise.resolve().then(o.bind(o, 19216)))), i(n.z.BackgroundData, (() => Promise.resolve().then(o.bind(o, 11833)))), i(n.z.MsccCookieBannerData, (() => o.e("msccCookieBanner").then(o.bind(o, 16920)))), i(n.z.OneTrustCookieConsentData, (() => o.e("ocvFeedback").then(o.bind(o, 90034)))), i(n.z.TopicData, (() => Promise.all([o.e("libs_topics-shared-state_dist_TopicData_connector_js-libs_topics-shared-state_dist_TopicData_-62f9da"), o.e("topicData")]).then(o.bind(o, 3999)))), i(n.z.PoweredByData, (() => o.e("poweredByData").then(o.bind(o, 91677)))), i(n.z.CategoryData, (() => o.e("category-data-connector").then(o.bind(o, 28428)))), i(n.z.ChannelData, (() => o.e("channel-data-connector").then(o.bind(o, 15801)))), i(n.z.LayoutPreferenceData, (() => o.e("layoutPreferenceData").then(o.bind(o, 35882)))), i(n.z.WeatherCardData, (() => Promise.all([o.e("common-feed-libs"), o.e("libs_location-service_dist_AutoSuggestService_index_js-libs_location-service_dist_profiles_We-d085cf"), o.e("weather-card-data-connector")]).then(o.bind(o, 86313)))), i(n.z.RewardsData, (() => o.e("RewardsData").then(o.bind(o, 77631)))), i(n.z.ExperienceLoadedData, (() => o.e("poweredby-legend-wc").then(o.bind(o, 64090)))), i(n.z.RewardsCoachmarkData, (() => o.e("RewardsCoachmarkData").then(o.bind(o, 20503)))), i(n.z.SignInData, (() => o.e("SignInData").then(o.bind(o, 76260)))), i(n.z.SocialData, (() => Promise.all([o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("social-data-connector")]).then(o.bind(o, 82670)))), i(n.z.SearchHistoryEdgenextData, (() => o.e("super-nav-coach-mark").then(o.bind(o, 38779)))), i(r.x.edgeChromiumPageWC, (() => Promise.resolve().then(o.bind(o, 25293)))), i(r.x.commonSearchBoxEdgeNext, (() => Promise.resolve().then(o.bind(o, 2189)))), i(r.x.topSitesEdgeNextWC, (() => Promise.resolve().then(o.bind(o, 43974)))), i(r.x.backgroundImageWC, (() => Promise.resolve().then(o.bind(o, 2437)))), i(n.z.AdminPortalData, (() => Promise.all([o.e("common-feed-libs"), o.e("admin-portal-data")]).then(o.bind(o, 58122)))), i(n.z.OfficeSharedData, (() => o.e("office-shared-data").then(o.bind(o, 13549)))), i(n.z.ShellNewTabData, (() => o.e("shell-new-tab-data").then(o.bind(o, 13790)))), i(r.x.industryNewsCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("industry-news-card")]).then(o.bind(o, 81142)))), i(r.x.summaryCardWC, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("summary-card-wc")]).then(o.bind(o, 69140)))), i(r.x.nudgeSpotlightCard, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("office-feed")]).then(o.bind(o, 66958)))), i(r.x.officeDocumentsTableWC, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("office-feed")]).then(o.bind(o, 9931)))), i(r.x.todoCardWC, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("office-feed")]).then(o.bind(o, 98807)))), i(r.x.productivityHub, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("office-feed")]).then(o.bind(o, 98207)))), i(r.x.frequentSitesCardWC, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("office-feed")]).then(o.bind(o, 10282)))), i(r.x.calendarCard, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("office-feed")]).then(o.bind(o, 3430)))), i(r.x.microsoftFeedCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("dompurify-library"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("microsoft-feed-card")]).then(o.bind(o, 32479)))), i(r.x.articleFre, (() => Promise.all([o.e("common-feed-libs"), o.e("libs_experiences-telemetry-data-mapper_dist_content-mappers_ContentCardTelemetryMapping_js-li-91cd1e"), o.e("articleFre")]).then(o.bind(o, 19740)))), i(r.x.articleRelatedStories, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_experiences-telemetry-data-mapper_dist_content-mappers_ContentCardTelemetryMapping_js-li-91cd1e"), o.e("articleRelatedStories")]).then(o.bind(o, 52996)))), i(r.x.articleTopComment, (() => Promise.all([o.e("common-feed-libs"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("articleTopComment")]).then(o.bind(o, 36363)))), i(r.x.autosCarousel, (() => Promise.all([o.e("common-others"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("autos-carousel")]).then(o.bind(o, 22782)))), i(r.x.autosMarketplaceCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("autosMarketplaceCard")]).then(o.bind(o, 68216)))), i(r.x.boostAdCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("boost-ad-card")]).then(o.bind(o, 72041)))), i(r.x.backgroundGallery, (() => o.e("background-gallery").then(o.bind(o, 62684)))), i(r.x.bingHealthCard, (() => Promise.all([o.e("common-windows-widget-shared"), o.e("bingHealthCard")]).then(o.bind(o, 16401)))), i(r.x.brandZone, (() => Promise.all([o.e("common-cscore"), o.e("brand-zone")]).then(o.bind(o, 69461)))), i(r.x.healthFitnessCarousel, (() => o.e("healthFitnessCarousel").then(o.bind(o, 28083)))), i(r.x.cardActionWC, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("dompurify-library"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("card-actions-wc")]).then(o.bind(o, 22448)))), i(r.x.casualGamesCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_views-helpers_dist_views-telemetry_ViewsTelemetryLibrary_js-node_modules_video_js_dist_v-172ab8"), o.e("casual-games-card")]).then(o.bind(o, 92208)))), i(r.x.casualGamesCarouselCard, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("casual-games-carousel-card")]).then(o.bind(o, 71193)))), i(r.x.casualGamesFeed, (() => Promise.all([o.e("common-cscore"), o.e("esports-library"), o.e("casual-games-feed")]).then(o.bind(o, 38445)))), i(r.x.channelList, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("channel-list")]).then(o.bind(o, 2492)))), i(r.x.channelStore, (() => Promise.all([o.e("common-others"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_topics-shared-state_dist_TopicData_connector_js-libs_topics-shared-state_dist_TopicData_-62f9da"), o.e("channel-store")]).then(o.bind(o, 81147)))), i(r.x.coldStartWC, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-infopane-carouselcard"), o.e("cold-start-wc")]).then(o.bind(o, 89978)))), i(r.x.conditionalBannerWC, (() => o.e("conditionalBannerWC").then(o.bind(o, 29057)))), i(r.x.commonSettingsEdgeNext, (() => Promise.all([o.e("common-cscore"), o.e("common-settings-edgenext")]).then(o.bind(o, 99513)))), i(r.x.communityCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("community-card")]).then(o.bind(o, 85401)))), i(r.x.contentGroupCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_experiences-telemetry-data-mapper_dist_content-mappers_ContentCardTelemetryMapping_js-li-91cd1e"), o.e("content-group-card")]).then(o.bind(o, 55510)))), i(r.x.nextdoorCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("nextdoor-card")]).then(o.bind(o, 6953)))), i(r.x.companyNewsCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("company-news-card")]).then(o.bind(o, 64197)))), i(r.x.dailyBriefWC, (() => o.e("daily-brief-wc").then(o.bind(o, 69912)))), i(r.x.dailyDiscovery, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("daily-discovery")]).then(o.bind(o, 96457)))), i(r.x.xboxFeedWC, (() => o.e("xbox-feed-wc").then(o.bind(o, 39160)))), i(r.x.denseCard, (() => o.e("dense-card").then(o.bind(o, 46715)))), i(r.x.devTools, (() => Promise.all([o.e("common-cscore"), o.e("dev-tools")]).then(o.bind(o, 1161)))), i(r.x.digestCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("digest-card")]).then(o.bind(o, 44993)))), i(r.x.edgeShopping, (() => o.e("edge-shopping").then(o.bind(o, 80064)))), i(r.x.esportsCard, (() => Promise.all([o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("esports-card")]).then(o.bind(o, 55889)))), i(r.x.linkedInCard, (() => Promise.all([o.e("common-feed-libs"), o.e("linked-in-card")]).then(o.bind(o, 82336)))), i(r.x.esportsStreamsCard, (() => Promise.all([o.e("common-cscore"), o.e("esports-library"), o.e("esports-streams-card")]).then(o.bind(o, 66531)))), i(r.x.feedbackLinkWC, (() => o.e("feedback").then(o.bind(o, 29418)))), i(r.x.healthTipWC, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("health-tip-wc")]).then(o.bind(o, 91631)))), i(r.x.followingFreConfirmation, (() => o.e("xbox-feed-wc").then(o.bind(o, 23113)))), i(r.x.followingFreFullWidth, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_topics-shared-state_dist_TopicData_connector_js-libs_topics-shared-state_dist_TopicData_-62f9da"), o.e("following-fre-full-width")]).then(o.bind(o, 23644)))), i(r.x.gameCard, (() => o.e("game-card").then(o.bind(o, 19614)))), i(r.x.gamingCompeteCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("common-infopane-carouselcard"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("gaming-compete-card")]).then(o.bind(o, 51092)))), i(r.x.gamingDiscoverStrip, (() => Promise.all([o.e("common-cscore"), o.e("gaming-discover-strip")]).then(o.bind(o, 48263)))), i(r.x.gamingInterestGroupCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("gaming-interest-group-card")]).then(o.bind(o, 21125)))), i(r.x.gamingMatchCard, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("gaming-match-card")]).then(o.bind(o, 80912)))), i(r.x.gamingMediaCarousel, (() => Promise.all([o.e("common-cscore"), o.e("esports-library"), o.e("gaming-media-carousel")]).then(o.bind(o, 70254)))), i(r.x.gamingPersonalizationCard, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("gaming-personalization-card")]).then(o.bind(o, 99101)))), i(r.x.gamingRecentlyPlayedCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("gaming-recentlyplayed-card")]).then(o.bind(o, 38677)))), i(r.x.gamingRecommendedCard, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("gaming-recommended-card")]).then(o.bind(o, 57101)))), i(r.x.gamingRedditCard, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("gaming-reddit-card")]).then(o.bind(o, 43199)))), i(r.x.gamingRewardsCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("common-infopane-carouselcard"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("gaming-rewards-card")]).then(o.bind(o, 13018)))), i(r.x.gamingStreamCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("common-infopane-carouselcard"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("gaming-stream-card")]).then(o.bind(o, 920)))), i(r.x.gamingTournamentCard, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("gaming-tournament-card")]).then(o.bind(o, 57957)))), i(r.x.gamingUpcomingCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("common-infopane-carouselcard"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("gaming-upcoming-card")]).then(o.bind(o, 86870)))), i(r.x.gamingVideoCard, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("common-infopane-carouselcard"), o.e("gaming-video-card")]).then(o.bind(o, 36413)))), i(r.x.generalElections, (() => o.e("general-elections").then(o.bind(o, 22895)))), i(r.x.electionCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("election-card")]).then(o.bind(o, 3164)))), i(r.x.gridViewFeed, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("grid-view-feed")]).then(o.bind(o, 55157)))), i(r.x.horoscopeAnswerCardWC, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("horoscope-answer-card-wc")]).then(o.bind(o, 27018)))), i(r.x.imageSearchWC, (() => o.e("image-search-wc").then(o.bind(o, 19205)))), i(r.x.interestFreCard, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("interest-fre-card")]).then(o.bind(o, 64364)))), i(r.x.interestsWC, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("libs_location-service_dist_AutoSuggestService_index_js-libs_traffic_dist_index_js"), o.e("interests-wc")]).then(o.bind(o, 29565)))), i(r.x.interestManagementCard, (() => Promise.all([o.e("common-windows-widget-shared"), o.e("common-cscore"), o.e("interest-management-card")]).then(o.bind(o, 75865)))), i(r.x.lottery, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("lottery-card")]).then(o.bind(o, 3852)))), i(r.x.marketplaceCardWC, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("marketplace-card-wc")]).then(o.bind(o, 38095)))), i(r.x.marketLanguageToggleWC, (() => o.e("na-trending").then(o.bind(o, 12494)))), i(r.x.mobileAppUpsell, (() => Promise.all([o.e("common-cscore"), o.e("mobile-app-upsell")]).then(o.bind(o, 68289)))),i(r.x.mobileChannelSlider, (() => o.e("mobile-channel-slider").then(o.bind(o, 45574)))),i(r.x.mobileStoryViewer, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("mobile-story-viewer")]).then(o.bind(o, 22450)))),i(r.x.mobilePopupWindow, (() => o.e("mobile-popup-window").then(o.bind(o, 99460)))),i(r.x.moneyInfo, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_data-transformer-shared_dist_index_js-libs_money-info-loader_dist_index_js-libs_money-da-adb667"), o.e("money-info")]).then(o.bind(o, 56306)))),i(r.x.msRewardsWC, (() => o.e("ms-rewards-wc").then(o.bind(o, 14705)))),i(r.x.navigationPageExperience, (() => o.e("navigation-page-experience").then(o.bind(o, 31698)))),i(r.x.newsHeadlineBelowSearchbox, (() => o.e("news-headline-below-searchbox").then(o.bind(o, 73248)))),i(r.x.newsSegmentCarousel, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("news-segment-carousel")]).then(o.bind(o, 59919)))),i(r.x.notificationBellWC, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("notification-bell-wc")]).then(o.bind(o, 50423)))),i(r.x.notificationMiniCard, (() => Promise.all([o.e("common-others"), o.e("common-cscore"), o.e("notification-mini-card")]).then(o.bind(o, 77812)))),i(r.x.nurturingCoachMark, (() => o.e("nurturing-coach-mark").then(o.bind(o, 20103)))),i(n.z.NurturingPlacementManager, (() => o.e("nurturing-placement-manager").then(o.bind(o, 47665)))),i(r.x.officeCoachmark, (() => Promise.all([o.e("common-feed-libs"), o.e("office-coachmark")]).then(o.bind(o, 74878)))),i(r.x.onThisDayCardWC, (() => Promise.all([o.e("common-windows-widget-shared"), o.e("common-cscore"), o.e("on-this-day-card-wc")]).then(o.bind(o, 99371)))),i(r.x.onThisDayCardSmall, (() => o.e("on-this-day-card-small").then(o.bind(o, 64869)))),i(r.x.overlayWC, (() => o.e("overlay-wc").then(o.bind(o, 17384)))),i(r.x.personalizeNavButton, (() => o.e("personalize-nav-button").then(o.bind(o, 7628)))),i(r.x.pillFreOverlay, (() => o.e("pill-fre-overlay").then(o.bind(o, 96317)))),i(r.x.pollsCardWC, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("polls-card-wc")]).then(o.bind(o, 49815)))),i(r.x.poweredByLegendWC, (() => o.e("poweredby-legend-wc").then(o.bind(o, 41648)))),i(r.x.prismSdCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("prism-sd-card")]).then(o.bind(o, 58877)))),i(r.x.publisherCarousel, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("publisher-carousel")]).then(o.bind(o, 6995)))),i(r.x.qna, (() => Promise.all([o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-infopane-carouselcard"), o.e("qna-card")]).then(o.bind(o, 29776)))),i(r.x.quizCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("quiz-card")]).then(o.bind(o, 95804)))),i(r.x.recipesSdCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("recipes-sd-card")]).then(o.bind(o, 54179)))),i(r.x.recommendedInterests, (() => Promise.all([o.e("common-feed-libs"), o.e("clarity")]).then(o.bind(o, 88223)))),i(r.x.recommendedSearchCarouselWC, (() => Promise.all([o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("recommended-search-carousel-wc")]).then(o.bind(o, 55955)))),i(r.x.recommendedSitesWC, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("recommendedSites-wc")]).then(o.bind(o, 25837)))),i(r.x.recommendedSearchesCard, (() => Promise.all([o.e("common-windows-widget-shared"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("recommended-searches-card")]).then(o.bind(o, 60444)))),i(r.x.rewardsCardWC, (() => o.e("rewards-card-wc").then(o.bind(o, 99925)))),i(r.x.rewardsDailySetCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_experiences-telemetry-data-mapper_dist_content-mappers_ContentCardTelemetryMapping_js-li-91cd1e"), o.e("rewards-daily-set-card")]).then(o.bind(o, 10419)))),i(r.x.sdCardMaskWC, (() => o.e("common-segments").then(o.bind(o, 17851)))),i(r.x.selectCarousel, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("select-carousel")]).then(o.bind(o, 61309)))),i(r.x.signalOverlay, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("signal-overlay")]).then(o.bind(o, 20533)))),i(r.x.sharedLinks, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("shared-links")]).then(o.bind(o, 15851)))),i(r.x.topSitesBookmarks, (() => Promise.all([o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("top-sites-bookmarks")]).then(o.bind(o, 50970)))),i(r.x.topSitesSubscription, (() => Promise.all([o.e("common-cscore"), o.e("top-sites-subscription")]).then(o.bind(o, 15921)))),i(r.x.sharepointNewsCard, (() => Promise.all([o.e("common-feed-libs"), o.e("sharepoint-news-card")]).then(o.bind(o, 44502)))),i(r.x.shoppingBWMCarousel, (() => Promise.all([o.e("common-others"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("web-components_shopping-super-carousel_dist_ShoppingProductCard_ShoppingProductCard_js-web-co-a62c5b"), o.e("experiences_shopping-entry-base-experience_dist_ShoppingEntryBaseExperience_js-libs_shopping--0e941e"), o.e("shopping-bwm-carousel")]).then(o.bind(o, 74977)))),i(r.x.shoppingCardWC, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("web-components_shopping-super-carousel_dist_ShoppingProductCard_ShoppingProductCard_js-web-co-a62c5b"), o.e("experiences_shopping-entry-base-experience_dist_ShoppingEntryBaseExperience_js-libs_shopping--0e941e"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-b41b7f"), o.e("shopping-card-wce")]).then(o.bind(o, 65531)))),i(r.x.shoppingEdgeInsightsCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("shopping-edge-insights-card")]).then(o.bind(o, 98743)))),i(r.x.socialAvatar, (() => o.e("social-avatar").then(o.bind(o, 39308)))),i(r.x.socialBarWC, (() => Promise.all([o.e("common-feed-libs"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("social-bar-wc")]).then(o.bind(o, 2745)))),i(r.x.socialReportMenu, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("dompurify-library"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("social-report-menu")]).then(o.bind(o, 36689)))),i(r.x.profilePromoCard, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("profile-promo-card")]).then(o.bind(o, 52367)))),i(r.x.premiumProfilePromoCard, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("premium-profile-promo-card")]).then(o.bind(o, 39386)))),i(r.x.sportsInfo, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("sports-info")]).then(o.bind(o, 80051)))),i(r.x.spotlightCardWC, (() => o.e("spotlight-card-wc").then(o.bind(o, 2564)))),i(r.x.superNav, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("super-nav")]).then(o.bind(o, 81359)))),i(r.x.superNavCoachMark, (() => o.e("super-nav-coach-mark").then(o.bind(o, 91132)))),i(r.x.tabbedFeedWC, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("tabbed-feed-wc")]).then(o.bind(o, 22403)))),i(r.x.toastWC, (() => o.e("toast-wc").then(o.bind(o, 21002)))),i(r.x.pillWC, (() => Promise.all([o.e("common-cscore"), o.e("pill-wc")]).then(o.bind(o, 76376)))),i(r.x.publisherSubscribeFollowButton, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("publisher-subscribe-follow-button")]).then(o.bind(o, 10510)))),i(r.x.signInControlWC, (() => o.e("sign-in-control-wc").then(o.bind(o, 45383)))),i(r.x.signInFlyoutWC, (() => o.e("sign-in-flyout-wc").then(o.bind(o, 95027)))),i(r.x.stickyPeek, (() => o.e("sticky-peek").then(o.bind(o, 22632)))),i(r.x.superCoachMarkWC, (() => o.e("super-coach-mark-wc").then(o.bind(o, 9164)))),i(r.x.storyCarousel, (() => o.e("story-carousel").then(o.bind(o, 44889)))),i(r.x.backToTopButton, (() => o.e("back-to-top-button").then(o.bind(o, 26673)))),i(r.x.themePickerWC, (() => o.e("SignInData").then(o.bind(o, 47788)))),i(r.x.trafficCardWC, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_location-service_dist_AutoSuggestService_index_js-libs_traffic_dist_index_js"), o.e("traffic-card-wc")]).then(o.bind(o, 2559)))),i(r.x.trafficHero, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_location-service_dist_AutoSuggestService_index_js-libs_traffic_dist_index_js"), o.e("traffic-hero")]).then(o.bind(o, 32137)))),i(r.x.travelDestination, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-infopane-carouselcard"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-libs_travel_dist_index_js-web-components_s-ef9e2d"), o.e("travel-destination")]).then(o.bind(o, 30937)))),i(r.x.travelCarousel, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-libs_travel_dist_index_js-web-components_s-ef9e2d"), o.e("travel-carousel")]).then(o.bind(o, 70359)))),i(r.x.travelHotelCarousel, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-libs_travel_dist_index_js-web-components_s-ef9e2d"), o.e("travel-hotel-carousel")]).then(o.bind(o, 45122)))),i(r.x.travelFlightCarousel, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-libs_travel_dist_index_js-web-components_s-ef9e2d"), o.e("travel-flight-carousel")]).then(o.bind(o, 12854)))),i(r.x.trendingTopics, (() => o.e("trendingTopics").then(o.bind(o, 81745)))),i(r.x.voiceSearchWC, (() => o.e("voice-search-wc").then(o.bind(o, 84842)))),i(r.x.waffleWC, (() => Promise.all([o.e("common-cscore"), o.e("waffle-wc")]).then(o.bind(o, 52262)))),i(r.x.waterfallViewFeed, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("waterfall-view-feed")]).then(o.bind(o, 19624)))),i(r.x.weatherCardWC, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-libs_weather-shared-wc_dist_utilities_entr-2dcd12"), o.e("weather-card-wc")]).then(o.bind(o, 18371)))),i(r.x.weatherHeroExperience, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("d3-library"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("weather-hero-experience")]).then(o.bind(o, 81888)))),i(r.x.weatherMinimapWC, (() => Promise.all([o.e("common-feed-libs"), o.e("weather-minimap-wc")]).then(o.bind(o, 34173)))),i(r.x.weatherVideoEntryWC, (() => o.e("weather-video-entry-wc").then(o.bind(o, 94242)))),i(r.x.weatherOneLiner, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("weather-one-liner")]).then(o.bind(o, 41530)))),i(r.x.welcomeGreetingLight, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-libs_weather-shared-wc_dist_utilities_entr-2dcd12"), o.e("welcomeGreetingLight")]).then(o.bind(o, 44236)))),i(r.x.xfeedWC, (() => o.e("xfeed").then(o.bind(o, 9249)))),i(r.x.prismCarouselCard, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("prism-carousel-card")]).then(o.bind(o, 28728)))),i(r.x.trendingSearchCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("trending-search-card")]).then(o.bind(o, 25988)))),i(r.x.realEstateCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("real-estate-card")]).then(o.bind(o, 94748)))),i(r.x.shoppingEventsDealCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("web-components_shopping-super-carousel_dist_ShoppingProductCard_ShoppingProductCard_js-web-co-a62c5b"), o.e("shopping-events-deal-card")]).then(o.bind(o, 27498)))),i(r.x.shoppingSdCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("web-components_shopping-super-carousel_dist_ShoppingProductCard_ShoppingProductCard_js-web-co-a62c5b"), o.e("experiences_shopping-entry-base-experience_dist_ShoppingEntryBaseExperience_js-libs_shopping--0e941e"), o.e("shopping-sd-card")]).then(o.bind(o, 52369)))),i(r.x.superBreakingNews, (() => o.e("superBreakingNews").then(o.bind(o, 8948)))),i(r.x.videoShoppingCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("video-shopping-card")]).then(o.bind(o, 15159)))),i(r.x.mangaCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("manga-card")]).then(o.bind(o, 89742)))),i(r.x.videoShoppingCarouselCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("video-shopping-carousel-card")]).then(o.bind(o, 61873)))),i(r.x.newsGroupsCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_experiences-telemetry-data-mapper_dist_content-mappers_ContentCardTelemetryMapping_js-li-91cd1e"), o.e("libs_feed-layout_dist_card-templates_top-stories-card_TopStoriesCardDataMapper_js-libs_feed-l-1afd74"), o.e("news-groups-card")]).then(o.bind(o, 26377)))),i(r.x.prayerTimesCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("prayer-times-card")]).then(o.bind(o, 75601)))),i(r.x.scrollDownButton, (() => o.e("scroll-down-button").then(o.bind(o, 16954)))),i(r.x.travelSdThemesCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-infopane-carouselcard"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-libs_travel_dist_index_js-web-components_s-ef9e2d"), o.e("travel-sd-themes-card")]).then(o.bind(o, 3157)))),i(r.x.travelSdDestinationsCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-libs_travel_dist_index_js-web-components_s-ef9e2d"), o.e("travel-sd-destinations-card")]).then(o.bind(o, 32413)))),i(r.x.travelSdHotelsCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-libs_travel_dist_index_js-web-components_s-ef9e2d"), o.e("travel-sd-hotels-card")]).then(o.bind(o, 23014)))),i(r.x.travelSdCarrentalsCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-libs_travel_dist_index_js-web-components_s-ef9e2d"), o.e("travel-sd-flights-card")]).then(o.bind(o, 32325)))),i(r.x.travelSdFlightsCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-libs_travel_dist_index_js-web-components_s-ef9e2d"), o.e("travel-sd-flights-card")]).then(o.bind(o, 9578)))),i(r.x.feedLevelFeedbackWC, (() => Promise.all([o.e("common-windows-widget-shared"), o.e("feed-level-feedback-wc")]).then(o.bind(o, 7359)))),i(r.x.contextualFeedbackWC, (() => o.e("contextual-feedback-wc").then(o.bind(o, 45506)))),i(r.x.hotListCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("hot-list-card")]).then(o.bind(o, 75485)))),i(r.x.channelFilterCard, (() => Promise.all([o.e("common-others"), o.e("common-cscore"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("channel-filter-card")]).then(o.bind(o, 69860)))),i(r.x.codexBingChat, (() => Promise.all([o.e("common-cscore"), o.e("codex-bing-chat")]).then(o.bind(o, 76998)))),i(r.x.bingIntlUpsell, (() => o.e("bing-intl-upsell").then(o.bind(o, 77007)))),i(r.x.shoppingGroupedCarousel, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-fast-msft-web-components"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("web-components_shopping-super-carousel_dist_ShoppingProductCard_ShoppingProductCard_js-web-co-a62c5b"), o.e("experiences_shopping-entry-base-experience_dist_ShoppingEntryBaseExperience_js-libs_shopping--0e941e"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-b41b7f"), o.e("shopping-grouped-carousel")]).then(o.bind(o, 31903)))),i(r.x.viewsNativeAd, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_experiences-telemetry-data-mapper_dist_content-mappers_ContentCardTelemetryMapping_js-li-91cd1e"), o.e("nas-highlight-v1"), o.e("views-native-mon")]).then(o.bind(o, 38011)))),i(r.x.gamingGamerModeUpsellCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("esports-library"), o.e("EsportsDataService")]).then(o.bind(o, 177)))),i(r.x.moneyAugmentCard, (() => Promise.all([o.e("common-feed-libs"), o.e("libs_data-transformer-shared_dist_index_js-libs_money-info-loader_dist_index_js-libs_money-da-adb667"), o.e("money-augment-card")]).then(o.bind(o, 27543)))),i(r.x.shoppingVerticalListsCard, (() => Promise.all([o.e("common-others"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("web-components_shopping-super-carousel_dist_ShoppingProductCard_ShoppingProductCard_js-web-co-a62c5b"), o.e("experiences_shopping-entry-base-experience_dist_ShoppingEntryBaseExperience_js-libs_shopping--0e941e"), o.e("shopping-vertical-lists-card")]).then(o.bind(o, 4930)))),i(r.x.sportsAugmentCard, (() => Promise.all([o.e("common-feed-libs"), o.e("libs_sports-data-service_dist_SportsDataMapper_js"), o.e("sports-augment-card")]).then(o.bind(o, 9763)))),i(r.x.shoppingNotification, (() => o.e("shopping-notification").then(o.bind(o, 89321)))),i(r.x.entertainmentPremierCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("entertainment-premier-card")]).then(o.bind(o, 21009)))),i(r.x.donationNpoCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("donation-npo-card")]).then(o.bind(o, 84522)))),i(r.x.commonAutoSuggest, (() => Promise.all([o.e("dompurify-library"), o.e("common-auto-suggest")]).then(o.bind(o, 26917)))),i(r.x.richCalendarCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-windows-widget-shared"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("rich-calendar-card")]).then(o.bind(o, 63314)))),i(r.x.shoppingAugmentCard, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("web-components_shopping-super-carousel_dist_ShoppingProductCard_ShoppingProductCard_js-web-co-a62c5b"), o.e("shopping-augment-card")]).then(o.bind(o, 83241)))),i(r.x.autosGarageCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("autos-garage-card")]).then(o.bind(o, 34377)))),i(r.x.floatButtonGroupWC, (() => o.e("float-button-group-wc").then(o.bind(o, 54156)))),i(r.x.socialLeadGenInArticle, (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("dompurify-library"), o.e("libs_social-data-service_dist_service_SocialService_js"), o.e("social-lead-gen-in-article")]).then(o.bind(o, 78657)))),i(r.x.watchVideosVerticalCarousel, (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("watch-videos-vertical-carousel")]).then(o.bind(o, 29099)))),i(r.x.heroContainerWC, (() => o.e("na-trending").then(o.bind(o, 6534)))),i(r.x.sharedHeroNewsCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191"), o.e("shared-hero-news-card")]).then(o.bind(o, 81321)))),i(r.x.learningNasaCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("learning-nasa-card")]).then(o.bind(o, 38185)))),i(r.x.learningTriviaCard, (() => Promise.all([o.e("common-others"), o.e("common-segments"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("learning-trivia-card")]).then(o.bind(o, 18204))));
            o(27868), o(34061);
            var s = JSON.parse('{"pivots":[{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":true},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"coreJSCache":"cold"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"coreJSCache":"partial"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"coreJSCache":"warm"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"inspirational"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":true,"edgeChromiumLayoutMode":"inspirational"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"focused"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"custom"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":true,"edgeChromiumLayoutMode":"informational"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"csr"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"csr","network":"4g","cpuGroup":"1-4","coreJSCache":"cold"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"csr","network":"4g","cpuGroup":"1-4","coreJSCache":"warm"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"csr","network":"4g","cpuGroup":"6-8","coreJSCache":"cold"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"csr","network":"4g","cpuGroup":"6-8","coreJSCache":"warm"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"ssr"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"ssr","network":"4g","cpuGroup":"1-4","coreJSCache":"cold"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"ssr","network":"4g","cpuGroup":"1-4","coreJSCache":"warm"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"ssr","network":"4g","cpuGroup":"6-8","coreJSCache":"cold"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"ssr","network":"4g","cpuGroup":"6-8","coreJSCache":"warm"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"fallback-csr"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":true},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"coreJSCache":"cold"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"coreJSCache":"partial"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"coreJSCache":"warm"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"inspirational"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"focused"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"custom"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"ssr","network":"4g","cpuGroup":"1-4","coreJSCache":"cold"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"ssr","network":"4g","cpuGroup":"1-4","coreJSCache":"warm"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"ssr","network":"4g","cpuGroup":"6-8","coreJSCache":"cold"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"ssr","network":"4g","cpuGroup":"6-8","coreJSCache":"warm"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"csr","network":"4g","cpuGroup":"1-4","coreJSCache":"cold"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"csr","network":"4g","cpuGroup":"1-4","coreJSCache":"warm"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"csr","network":"4g","cpuGroup":"6-8","coreJSCache":"cold"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"edgeChromiumLayoutMode":"informational","renderArch":"csr","network":"4g","cpuGroup":"6-8","coreJSCache":"warm"},{"pageProduct":"entnews","pageType":"dhp","pageName":"default","preRender":true},{"pageProduct":"entnews","pageType":"dhp","pageName":"default","preRender":false},{"pageProduct":"entnews","pageType":"ntp","pageName":"default","preRender":true},{"pageProduct":"entnews","pageType":"ntp","pageName":"default","preRender":false},{"pageProduct":"entnews","pageType":"ntp","pageName":"entnewshp","preRender":true},{"pageProduct":"entnews","pageType":"ntp","pageName":"entnewshp","preRender":false},{"pageProduct":"entnews","pageType":"dhp","pageName":"entnewshp","preRender":true},{"pageProduct":"entnews","pageType":"dhp","pageName":"entnewshp","preRender":false},{"pageProduct":"anaheim","pageType":"verthp","pageName":"gaming","preRender":true},{"pageProduct":"anaheim","pageType":"verthp","pageName":"gaming","preRender":false},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-callpcsfrakm"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-callpcsfrafd"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-callpcsfdshp"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-callpcsfrakm"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-callpcsfrafd"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-callpcsfdshp"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":true,"experimentId":"prg-preadsflaghc"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":true,"experimentId":"prg-preadsflaght"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-supervnat2c"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-supervnat3"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-supervnat4"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-ctrlnoflw"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-pubflw2"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-waist-bct"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-waist-bdg"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-waist-btn"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-ctrlnoflw"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-pubflw2"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-waist-bct"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-waist-bdg"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-waist-btn"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":true,"experimentId":"prg-ntpcompdict","_sampleRate":50},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-ntpcompdict","_sampleRate":50},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":true,"experimentId":"prg-ntpcompdict","_sampleRate":50},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-ntpcompdict","_sampleRate":50},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"inlinecrscall","edgeChromiumLayoutMode":"informational","_sampleRate":50},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"regularcrscall","edgeChromiumLayoutMode":"informational","_sampleRate":50},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"inlinecrscall","edgeChromiumLayoutMode":"focused","_sampleRate":50},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"regularcrscall","edgeChromiumLayoutMode":"focused","_sampleRate":50},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"inlinecrscall","edgeChromiumLayoutMode":"informational","_sampleRate":50},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"regularcrscall","edgeChromiumLayoutMode":"informational","_sampleRate":50},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"inlinecrscall","edgeChromiumLayoutMode":"informational","coreJSCache":"cold","_sampleRate":50},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"regularcrscall","edgeChromiumLayoutMode":"informational","coreJSCache":"warm","_sampleRate":50},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-telemetry-trace","_sampleRate":15},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-telemetry-tracec","_sampleRate":15},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"delayederrorsc","edgeChromiumLayoutMode":"informational","_sampleRate":50},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"delayedcverrors","edgeChromiumLayoutMode":"informational","_sampleRate":50},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"delayederrorsc","edgeChromiumLayoutMode":"focused","_sampleRate":50},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"delayedcverrors","edgeChromiumLayoutMode":"focused","_sampleRate":50},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"delayederrorsc","edgeChromiumLayoutMode":"informational","_sampleRate":50},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"delayedcverrors","edgeChromiumLayoutMode":"informational","_sampleRate":50},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"delayederrorsc","edgeChromiumLayoutMode":"focused","_sampleRate":50},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"delayedcverror","edgeChromiumLayoutMode":"focused","_sampleRate":50},{"pageProduct":"entnews","pageType":"ntp","pageName":"default","preRender":true,"experimentId":"prg-ntpcompdict","_sampleRate":100},{"pageProduct":"entnews","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-ntpcompdict","_sampleRate":100},{"pageProduct":"entnews","pageType":"dhp","pageName":"default","preRender":true,"experimentId":"prg-ntpcompdict","_sampleRate":100},{"pageProduct":"entnews","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-ntpcompdict","_sampleRate":100},{"pageProduct":"entnews","pageType":"ntp","pageName":"default","preRender":true,"experimentId":"ntpcomp-ctrl","_sampleRate":100},{"pageProduct":"entnews","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"ntpcomp-ctrl","_sampleRate":100},{"pageProduct":"entnews","pageType":"dhp","pageName":"default","preRender":true,"experimentId":"ntpcomp-ctrl","_sampleRate":100},{"pageProduct":"entnews","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"ntpcomp-ctrl","_sampleRate":100},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-ntp-earlyfeedssr","renderArch":"ssr"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-ntp-earlyssr-c","renderArch":"ssr"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-ntp-earlyfeedssr","renderArch":"ssr"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-ntp-earlyssr-c","renderArch":"ssr"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":true,"experimentId":"prg-f3-wf2-wpomc"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":true,"experimentId":"prg-f3-no-car"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":true,"experimentId":"prg-f3-wf2-prod"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-f3-wf2-wpomc"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-f3-no-car"},{"pageProduct":"anaheim","pageType":"ntp","pageName":"default","preRender":false,"experimentId":"prg-f3-wf2-prod"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":true,"experimentId":"prg-f3-wf2-wpomc"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":true,"experimentId":"prg-f3-no-car"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":true,"experimentId":"prg-f3-wf2-prod"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-f3-wf2-wpomc"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-f3-no-car"},{"pageProduct":"anaheim","pageType":"dhp","pageName":"default","preRender":false,"experimentId":"prg-f3-wf2-prod"}]}'),
                c = o.t(s, 2), d = o(20509), l = o(95508), p = o(46243), u = o(86489), m = o(92979), g = o(63011),
                h = o(65902), f = o(31479), b = o(51993), v = o(85485), x = o(69438), y = o(25745), _ = o(94876),
                w = o(11915), S = o(63818), k = o(10754), C = o(76733), P = o(41181), T = o(96947), B = o(31718),
                A = o(42933), I = o(87603), F = o(90215), L = o(21930), R = o(36926), M = o(75120), N = o(88826),
                E = o(73425), $ = o(69233), D = o(83102), j = o(33512), H = o(38918), U = o(84688), O = o(77232),
                W = o(62932), z = o(59489), G = o(34060), V = o(93590), q = o(54297), Y = o(95153), K = o(48204),
                J = o(42645), X = o(14792), Q = o(92100), Z = o(25586), ee = o(71778), te = o(77036), oe = o(92095),
                ne = o(10788), re = o(23979), ae = o(79993), ie = o(87188), se = o(61153), ce = o(65774), de = o(34479),
                le = o(23357), pe = o(45870), ue = o(58616), me = o(49155), ge = o(98619), he = o(45266), fe = o(78790),
                be = o(68054), ve = o(35607), xe = o(1518), ye = o(34631), _e = o(43438), we = o(30523), Se = o(79453),
                ke = o(42465), Ce = o(39882), Pe = o(43356), Te = o(67213), Be = o(33497), Ae = o(548), Ie = o(48503),
                Fe = o(71247), Le = o(64999), Re = o(53980), Me = o(8679), Ne = o(59887), Ee = o(88672), $e = o(67044),
                De = o(93388), je = o(78419), He = o(57042), Ue = o(14269), Oe = o(23549), We = o(95244), ze = o(62713),
                Ge = o(19580), Ve = o(14959), qe = o(9498);

            function Ye(e, t, o) {
                const n = V.jG.CurrentRequestTargetScope && V.jG.CurrentRequestTargetScope.pageExperiments,
                    r = n && n.includes("prg-telemetry-trace"),
                    a = je.h.getAppTypeTrackingSystemConfig(G.Al.IsBlendedEnterprise),
                    i = n && (n.includes("prg-ad-ivq") || n.includes("prg-ad-cltlogevt"));
                (0, Oe.uZ)(new Ge.o({
                    anonCookieName: V.jG.AuthCookieName,
                    trackingSystems: a,
                    autoCaptureContentView: !1,
                    useEventQueue: !0,
                    inheritPropertyList: ["ext"],
                    inheritByTraversingDOM: !0,
                    memoizeInheritedProperties: !1,
                    enableSendClientLogEvent: i,
                    logElementForLineageFailure: !0,
                    hydrationPromise: o,
                    enableTraceGenerator: r,
                    enableEventsBatching: Ke(),
                    deferContentViewIntersectionCallbacks: G.Al.IsPrerender,
                    disableLayoutEventManager: n && n.includes("nolayoutevt"),
                    enableNoPartialContentView: !0
                })), (0, Ve.B8)(o), Xe = !1, document.addEventListener(De.g.trackValuesUpdated, et);
                const s = function (e, t) {
                    const o = Q.c.getQueryParameterByName("startpage", e),
                        n = Q.c.getQueryParameterByName("firstlaunch", e),
                        r = "0" !== Q.c.getQueryParameterByName("dsp", e), a = o || "1" === n ? "dhp" : "ntp";
                    let i = o ? "msedgdhp" : "msedgntp";
                    V.jG.CurrentRequestTargetScope.audienceMode === He.F.Enterprise ? i = "entnewsntp" : V.jG.CurrentRequestTargetScope.os === Ue.Q.Xbox && (i = "xboxntp");
                    e && e.includes("ocid=widgetonlockscreen") && (i = Q.c.getQueryParameterByName("ocid", e));
                    const s = window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)");
                    let c = !1;
                    s && (c = !!s.matches, s.addEventListener("change", (e => {
                        Oe.M0.updatePageMetadata({page: {theme: e.matches ? "dark" : "light"}})
                    })));
                    const d = {
                            pageCanvas: "Browser",
                            pageConfiguration: null,
                            pageName: "1" === n ? "FRE" : "default",
                            pageOcid: i,
                            pageProduct: G.Al.IsBlendedEnterprise ? "entnews" : "anaheim",
                            pageTheme: c ? "dark" : "light",
                            pageHas3PSearch: !r,
                            pageContentDomainId: "340",
                            pageContentSubCategory: "antp",
                            pageContentVertical: "homepage"
                        }, l = {pageType: a, pageUrl: e, pageViewType: (0, ge.vi)()},
                        p = je.h.getAppTypeTelemetryContract(d, t, null, l),
                        u = {...p, page: {...p.page, isSearchAB: !1}};
                    return u
                }(e, t);
                je.h.initPage(s), _e.A.subscribe(_e.U.Initialized, nt), "false" === Q.c.getQueryParameterByName("enableTrack", e) && Oe.M0.disableTrackingSystem(We.G.All);
                const c = !G.Al.IsPrerender;
                Oe.M0.addOrUpdateTmplProperty("ssrscope", c ? "1" : "0")
            }

            function Ke() {
                const e = V.jG.CurrentRequestTargetScope && V.jG.CurrentRequestTargetScope.pageExperiments;
                return G.Al.IsPrerender || e && e.includes("delayedcverrors") ? ["AppError", "ContentView"] : !G.Al.IsPrerender && e && e.includes("delayedcvnp") ? ["ContentView"] : []
            }

            let Je, Xe;

            function Qe(e, t) {
                (0, K.ll)() == le.uD.Init && (0, K.nl)(le.uD.Sticky);
                Oe.M0.updatePageMetadata({feed: {layout: "multicol"}}, !0);
                const o = function (e) {
                    switch (e) {
                        case he.iz.Office365:
                            return "productivityHub";
                        case he.iz.Following:
                            return `following/${(0, K.ll)()}`;
                        case he.iz.MicrosoftNews:
                        default:
                            return "myfeed"
                    }
                }(t);
                Oe.M0.updatePageMetadata({feed: {id: o}});
                const {name: n, type: r, product: a} = Oe.M0.getPageMetadata().contract.page;
                (0, I.nm)("pageType", r), (0, I.nm)("pageName", n), (0, I.nm)("pageProduct", a)
            }

            function Ze() {
                "visible" === document.visibilityState && (Xe && (Oe.M0.addEventTypeToForceQueueList("ContentView"), Oe.M0.flush(!0, void 0, "ContentView")), document.removeEventListener("visibilitychange", Ze))
            }

            function et() {
                document.removeEventListener(De.g.trackValuesUpdated, et), Xe = !0, Je ? tt() : Ze()
            }

            function tt() {
                Oe.M0.waitForContentVisibilityObserverInit().then((() => {
                    Oe.M0.removeEventTypeFromForceQueueList("ContentView"), Oe.M0.flush(void 0, "ContentView", void 0)
                })), Oe.M0.flush(void 0, void 0, "ContentView")
            }

            function ot() {
                return V.jG.CurrentRequestTargetScope && V.jG.CurrentRequestTargetScope.audienceMode === He.F.Enterprise
            }

            function nt(e) {
                if (e) {
                    _e.A.get(_e.U.CookieConsentStatus) !== be._.NotRequired && Oe.M0.disableTrackingSystem(We.G.Comscore)
                }
            }

            function rt(e) {
                switch (e) {
                    case he.iz.Office365:
                        return "entnewshp";
                    case he.iz.Following:
                        return "following";
                    default:
                        return "default"
                }
            }

            Je = !1, Xe = !0, G.Al.IsPrerender && "visible" !== document.visibilityState ? (document.addEventListener("visibilitychange", Ze), (0, qe.lr)().then((() => {
                Je = !0, Xe && (document.removeEventListener("visibilitychange", Ze), tt())
            }))) : Je = !0;
            var at = o(97030), it = o(50632), st = o(47467), ct = o(61514);

            function dt(e, t) {
                return e && e.enableRiverZoom && e.columnDifferences && e.columnDifferences[t] || 0
            }

            function lt(e) {
                if (e) {
                    if (e.enablePeregrineDesignSystem || e.enablePeregrineCDNDS) {
                        if ((0, ct.ov)(!0), e.enablePeregrineDesignSystem) {
                            if (!window.matchMedia("(prefers-color-scheme: dark)")) return void (0, N.H)(M.z5u, "The initialization of peregrine design system initialization failed.", void 0, {
                                ...M.z5u.pb,
                                customMessage: "Error: the calling for window.matchMedia with prefers-color-schema failed."
                            });
                            (0, ct.i)()
                        }
                        if (e.enablePeregrineCDNDS) {
                            const e = "css_tokens";
                            if (!document.getElementById(e)) {
                                const t = document.createElement("link");
                                t.rel = "stylesheet", t.type = "text/css", t.href = `${(0, V.Yq)().StaticsUrl}/pr-4614903/common/fluentui-tokens.css`, t.media = "all", t.id = e, document.body.appendChild(t)
                            }
                        }
                    }
                } else (0, N.H)(M.dE2, "The initialization of peregrine design system initialization failed.", void 0, {
                    ...M.dE2.pb,
                    customMessage: "Error: The EdgeChromiumPageWCConfig is null. so the configuration is not available."
                })
            }

            var pt = o(45492), ut = o(16356), mt = o(40015), gt = o(28914), ht = o(34832);
            var ft = o(64726), bt = o(1152), vt = o(52704), xt = o(32687), yt = o(80329);
            const _t = function () {
                (0, at.jU)(12);
                const e = [0, at.xs + 32, at._3 + 32, at.Xn + 32, at.xX + 32, at.sc + 32];
                return (0, at.lE)(), e
            }();
            var wt = o(96531), St = o(2288), kt = o(84030), Ct = o(63070), Pt = o(7052), Tt = o(23335), Bt = o(17855);
            var At = o(60189), It = o(37423), Ft = o(69686);
            new Set([{
                instanceId: null,
                configRef: {experienceType: "EdgeChromiumPageWC", instanceSrc: "default"}
            }, {
                instanceId: "BackgroundImageWC",
                configRef: {experienceType: "BackgroundImageWC", instanceSrc: "default"}
            }, {
                instanceId: "CasualGamesCard",
                configRef: {experienceType: "CasualGamesCard", instanceSrc: "default"}
            }, {
                instanceId: "CommonSearchBoxEdgeNext",
                configRef: {experienceType: "CommonSearchBoxEdgeNext", instanceSrc: "default"}
            }, {
                instanceId: "CommonSettingsEdgeNext",
                configRef: {experienceType: "CommonSettingsEdgeNext", instanceSrc: "default"}
            }, {
                instanceId: "CommunityCard",
                configRef: {experienceType: "CommunityCard", instanceSrc: "default"}
            }, {
                instanceId: "ContentGroupCard",
                configRef: {experienceType: "ContentGroupCard", instanceSrc: "default"}
            }, {
                instanceId: "DenseCard",
                configRef: {experienceType: "DenseCard", instanceSrc: "default"}
            }, {
                instanceId: "DigestCard",
                configRef: {experienceType: "DigestCard", instanceSrc: "default"}
            }, {
                instanceId: "DonationNpoCard",
                configRef: {experienceType: "DonationNpoCard", instanceSrc: "default"}
            }, {
                instanceId: "FloatButtonGroupWC",
                configRef: {experienceType: "FloatButtonGroupWC", instanceSrc: "default"}
            }, {
                instanceId: "GridViewFeed",
                configRef: {experienceType: "GridViewFeed", instanceSrc: "default"}
            }, {
                instanceId: "HoroscopeAnswerCardWC",
                configRef: {experienceType: "HoroscopeAnswerCardWC", instanceSrc: "default"}
            }, {
                instanceId: "HotListCard",
                configRef: {experienceType: "HotListCard", instanceSrc: "default"}
            }, {
                instanceId: "LearningNasaCard",
                configRef: {experienceType: "LearningNasaCard", instanceSrc: "default"}
            }, {
                instanceId: "LearningTriviaCard",
                configRef: {experienceType: "LearningTriviaCard", instanceSrc: "default"}
            }, {
                instanceId: "MoneyInfo",
                configRef: {experienceType: "MoneyInfo", instanceSrc: "default"}
            }, {
                instanceId: "MsRewardsWC",
                configRef: {experienceType: "MsRewardsWC", instanceSrc: "default"}
            }, {
                instanceId: "NotificationBellWC",
                configRef: {experienceType: "NotificationBellWC", instanceSrc: "default"}
            }, {
                instanceId: "NextdoorCard",
                configRef: {experienceType: "NextdoorCard", instanceSrc: "default"}
            }, {
                instanceId: "WatchVideosVerticalCarousel",
                configRef: {experienceType: "WatchVideosVerticalCarousel", instanceSrc: "default"}
            }, {
                instanceId: "RealEstateCard",
                configRef: {experienceType: "RealEstateCard", instanceSrc: "default"}
            }, {
                instanceId: "EntertainmentPremierCard",
                configRef: {experienceType: "EntertainmentPremierCard", instanceSrc: "default"}
            }, {
                instanceId: "RecommendedSitesWC",
                configRef: {experienceType: "RecommendedSitesWC", instanceSrc: "default"}
            }, {
                instanceId: "SharedHeroNewsCard",
                configRef: {experienceType: "SharedHeroNewsCard", instanceSrc: "default"}
            }, {
                instanceId: "ShoppingCardWC",
                configRef: {experienceType: "ShoppingCardWC", instanceSrc: "default"}
            }, {
                instanceId: "ShoppingSdCard",
                configRef: {experienceType: "ShoppingSdCard", instanceSrc: "default"}
            }, {
                instanceId: "ShoppingVerticalListsCard",
                configRef: {experienceType: "ShoppingVerticalListsCard", instanceSrc: "default"}
            }, {
                instanceId: "SocialBarWC",
                configRef: {experienceType: "SocialBarWC", instanceSrc: "tellUsMore"}
            }, {
                instanceId: "SuperNav",
                configRef: {experienceType: "SuperNav", instanceSrc: "default"}
            }, {
                instanceId: "TopSitesEdgeNextWC",
                configRef: {experienceType: "TopSitesEdgeNextWC", instanceSrc: "default"}
            }, {
                instanceId: "TrafficCardWC",
                configRef: {experienceType: "TrafficCardWC", instanceSrc: "default"}
            }, {
                instanceId: "TrafficHero",
                configRef: {experienceType: "TrafficHero", instanceSrc: "default"}
            }, {
                instanceId: "TravelDestination",
                configRef: {experienceType: "TravelDestination", instanceSrc: "default"}
            }, {
                instanceId: "TravelHotelCarousel",
                configRef: {experienceType: "TravelHotelCarousel", instanceSrc: "default"}
            }, {
                instanceId: "TravelSdDestinationsCard",
                configRef: {experienceType: "TravelSdDestinationsCard", instanceSrc: "default"}
            }, {
                instanceId: "TravelSdThemesCard",
                configRef: {experienceType: "TravelSdThemesCard", instanceSrc: "default"}
            }, {
                instanceId: "TravelFlightCarousel",
                configRef: {experienceType: "TravelFlightCarousel", instanceSrc: "default"}
            }, {
                instanceId: "TravelSdFlightsCard",
                configRef: {experienceType: "TravelSdFlightsCard", instanceSrc: "default"}
            }, {
                instanceId: "TravelSdCarrentalsCard",
                configRef: {experienceType: "TravelSdCarrentalsCard", instanceSrc: "default"}
            }, {
                instanceId: "TravelSdHotelsCard",
                configRef: {experienceType: "TravelSdHotelsCard", instanceSrc: "default"}
            }, {
                instanceId: "TrendingSearchCard",
                configRef: {experienceType: "TrendingSearchCard", instanceSrc: "default"}
            }, {
                instanceId: "WaterfallViewFeed",
                configRef: {experienceType: "WaterfallViewFeed", instanceSrc: "default"}
            }, {
                instanceId: "WeatherCardWC",
                configRef: {experienceType: "WeatherCardWC", instanceSrc: "default"}
            }, {
                instanceId: "WeatherHeroExperience",
                configRef: {experienceType: "WeatherHeroExperience", instanceSrc: "default"}
            }, {
                instanceId: "WeatherMinimapWC",
                configRef: {experienceType: "WeatherMinimapWC", instanceSrc: "default"}
            }, {
                instanceId: "WeatherVideoEntryWC",
                configRef: {experienceType: "WeatherVideoEntryWC", instanceSrc: "default"}
            }, {
                instanceId: "SportsInfo",
                configRef: {experienceType: "SportsInfo", instanceSrc: "default"}
            }, {
                instanceId: "HealthTipWC",
                configRef: {experienceType: "HealthTipWC", instanceSrc: "default"}
            }, {
                instanceId: "AutosMarketplaceCard",
                configRef: {experienceType: "AutosMarketplaceCard", instanceSrc: "default"}
            }, {
                instanceId: "MarketplaceCardWC",
                configRef: {experienceType: "MarketplaceCardWC", instanceSrc: "default"}
            }, {
                instanceId: "BoostAdCard",
                configRef: {experienceType: "BoostAdCard", instanceSrc: "default"}
            }, {
                instanceId: "PrayerTimesCard",
                configRef: {experienceType: "PrayerTimesCard", instanceSrc: "default"}
            }, {
                instanceId: "CodexBingChat",
                configRef: {experienceType: "CodexBingChat", instanceSrc: "default"}
            }, {
                instanceId: "BingIntlUpsell",
                configRef: {experienceType: "BingIntlUpsell", instanceSrc: "default"}
            }, {
                instanceId: "SignInControlWC",
                configRef: {experienceType: "SignInControlWC", instanceSrc: "default"}
            }, {
                instanceId: "QuizCard",
                configRef: {experienceType: "QuizCard", instanceSrc: "default"}
            }, {
                instanceId: "NewsGroupsCard",
                configRef: {experienceType: "NewsGroupsCard", instanceSrc: "default"}
            }, {
                instanceId: "ElectionCard",
                configRef: {experienceType: "ElectionCard", instanceSrc: "default"}
            }, {
                instanceId: "MoneyAugmentCard",
                configRef: {experienceType: "MoneyAugmentCard", instanceSrc: "default"}
            }, {
                instanceId: "SportsAugmentCard",
                configRef: {experienceType: "SportsAugmentCard", instanceSrc: "default"}
            }, {
                instanceId: "ShoppingAugmentCard",
                configRef: {experienceType: "ShoppingAugmentCard", instanceSrc: "default"}
            }, {
                instanceId: "RichCalendarCard",
                configRef: {experienceType: "RichCalendarCard", instanceSrc: "default"}
            }, {
                instanceId: "WaffleWC",
                configRef: {experienceType: "WaffleWC", instanceSrc: "default"}
            }, {
                instanceId: "FollowingFreFullWidth",
                configRef: {experienceType: "FollowingFreFullWidth", instanceSrc: "default"}
            }, {
                instanceId: "MobileAppUpsell",
                configRef: {experienceType: "MobileAppUpsell", instanceSrc: "default"}
            }, {
                instanceId: "AutosGarageCard",
                configRef: {experienceType: "AutosGarageCard", instanceSrc: "default"}
            }, {
                instanceId: "SelectCarousel",
                configRef: {experienceType: "SelectCarousel", instanceSrc: "default"}
            }, {
                instanceId: "PrismSdCard",
                configRef: {experienceType: "PrismSdCard", instanceSrc: "default"}
            }].map((e => (0, Ft.ITY)(e.configRef.experienceType))));
            const Lt = [r.x.edgeChromiumPageWC, r.x.notificationBellWC, r.x.superNav, r.x.gridViewFeed, r.x.denseCard, r.x.digestCard, r.x.moneyInfo, r.x.sportsInfo, r.x.shoppingCardWC, r.x.shoppingSdCard, r.x.trafficCardWC, r.x.trafficHero, r.x.travelDestination, r.x.travelSdDestinationsCard, r.x.travelSdThemesCard, r.x.healthTipWC, r.x.weatherCardWC, r.x.marketplaceCardWC, r.x.waterfallViewFeed, r.x.weatherHeroExperience, r.x.sharedHeroNewsCard].map(Ft.ITY),
                Rt = ["waterfall-view-feed", "grid-view-feed", "cs-responsive-infopane"];
            n.z.AdminPortalData, n.z.CategoryData, n.z.ChannelData, n.z.CoachmarkData, n.z.IrisData, n.z.LayoutPreferenceData, n.z.MsccCookieBannerData, n.z.NurturingPlacementManager, n.z.OfficeSharedData, n.z.OneTrustCookieConsentData, n.z.PoweredByData, n.z.RewardsCoachmarkData, n.z.RewardsData, n.z.SearchHistoryEdgenextData, n.z.ShellNewTabData, n.z.SignInData, r.x.articleFre, r.x.articleRelatedStories, r.x.articleTopComment, r.x.autosCarousel, r.x.backToTopButton, r.x.backgroundGallery, r.x.bingHealthCard, r.x.boostAd, r.x.brandZone, r.x.calendarCard, r.x.cardActionWC, r.x.casualGamesCarouselCard, r.x.casualGamesFeed, r.x.casualGamesLandingV2, r.x.channelFilterCard, r.x.channelList, r.x.channelPage, r.x.channelStore, r.x.commonAutoSuggest, r.x.companyNewsCard, r.x.conditionalBannerWC, r.x.contextualFeedbackWC, r.x.coldStartWC, r.x.dailyDiscovery, r.x.devTools, r.x.edgeShopping, r.x.esportsCard, r.x.esportsStreamsCard, r.x.feedbackLinkWC, r.x.feedLevelFeedbackWC, r.x.floatButtonGroupWC, r.x.followingFreConfirmation, r.x.frequentSitesCardWC, r.x.gameCard, r.x.gamingCompeteCard, r.x.gamingDiscoverStrip, r.x.gamingGamerModeUpsellCard, r.x.gamingInterestGroupCard, r.x.gamingMatchCard, r.x.gamingMediaCarousel, r.x.gamingPage, r.x.gamingPersonalizationCard, r.x.gamingRecentlyPlayedCard, r.x.gamingRecommendedCard, r.x.gamingRedditCard, r.x.gamingRewardsCard, r.x.gamingStreamCard, r.x.gamingTournamentCard, r.x.gamingUpcomingCard, r.x.gamingVideoCard, r.x.generalElections, r.x.groceryCouponSdCard, r.x.healthFitnessCarousel, r.x.holidayEffects, r.x.imageSearchWC, r.x.industryNewsCard, r.x.interestManagementCard, r.x.interestFreCard, r.x.interestsWC, r.x.linkedInCard, r.x.lottery, r.x.mangaCard, r.x.marketLanguageToggleWC, r.x.microsoftFeedCard, r.x.mobileChannelSlider, r.x.mobileStoryViewer, r.x.moneyInfoCardWC, r.x.navigationPageExperience, r.x.newsHeadlineBelowSearchbox, r.x.newsSegmentCarousel, r.x.nudgeSpotlightCard, r.x.nurturingCoachMark, r.x.notificationMiniCard, r.x.officeCoachmark, r.x.officeDocumentsTableWC, r.x.onThisDayCardSmall, r.x.onThisDayCardWC, r.x.overlayWC, r.x.personalizeNavButton, r.x.pillFreOverlay, r.x.pillWC, r.x.pollsCardWC, r.x.poweredByLegendWC, r.x.premiumProfilePromoCard, r.x.prismCarouselCard,r.x.productivityHub,r.x.profilePromoCard,r.x.publisherCarousel,r.x.publisherSubscribeFollowButton,r.x.qna,r.x.recipesSdCard,r.x.recommendedInterests,r.x.recommendedSearchCarouselWC,r.x.recommendedSearchesCard,r.x.rewardsCardWC,r.x.rewardsDailySetCard,r.x.scrollDownButton,r.x.sdCardMaskWC,r.x.searchHistoryEdgeNextWC,r.x.sharedLinks,r.x.sharepointNewsCard,r.x.shoppingEdgeInsightsCard,r.x.shoppingEventsDealCard,r.x.shoppingNotification,r.x.signInFlyoutWC,r.x.socialAvatar,r.x.socialReportMenu,r.x.sportsCardWC,r.x.sportsOlympicCardWC,r.x.sportsWorldCupCardWC,r.x.spotlightCardWC,r.x.stickyPeek,r.x.storyCarousel,r.x.summaryCardWC,r.x.superBreakingNews,r.x.superCoachMarkWC,r.x.superNavCoachMark,r.x.tabbedFeedWC,r.x.themePickerWC,r.x.toastWC,r.x.todoCardWC,r.x.topSitesSubscription,r.x.travelCarousel,r.x.trendingTopics,r.x.videoShoppingCard,r.x.videoShoppingCarouselCard,r.x.voiceSearchWC,r.x.welcomeGreetingWC,r.x.welcomeGreetingLight,r.x.xboxFeedWC,r.x.xfeedWC,r.x.testBingNudge,r.x.weatherOneLiner;
            var Mt = o(66365), Nt = o(68310), Et = o(64902), $t = o(84237), Dt = o(84424), jt = o(45675), Ht = o(55524),
                Ut = o(78672), Ot = o(93893), Wt = o(39731), zt = o(83710), Gt = o(64518), Vt = o(19995), qt = o(69792),
                Yt = o(41074);
            const Kt = {
                [r.x.moneyInfo]: r.x.moneyInfoCardWC,
                [r.x.sportsInfo]: r.x.sportsCardWC,
                [r.x.travelHotelCarousel]: "TravelDestinationCarousel",
                [r.x.travelFlightCarousel]: "TravelDestinationCarousel",
                [r.x.travelSdDestinationsCard]: r.x.travelDestination,
                [r.x.travelSdFlightsCard]: r.x.travelDestination,
                [r.x.travelSdHotelsCard]: r.x.travelDestination,
                [r.x.travelSdThemesCard]: r.x.travelDestination
            };

            function Jt() {
                var e;
                const t = (0, k.Ou)(), o = (0, Pe.S0)(), n = {
                    "cs-flipper": {mode: ue.a5.Never},
                    "cs-super-nav-horizontal-item": {mode: ue.a5.Never},
                    "fluent-button": {mode: ue.a5.Never},
                    "cs-article-card": {
                        mode: [ue.a5.IdleAfterTtvr, ue.a5.OnHover, ue.a5.OnPageResize], markTtvr: e => {
                            var t, o;
                            return null === (t = e.data) || void 0 === t || null === (o = t.visualReadinessCallback) || void 0 === o ? void 0 : o.call(t, qt.u.VP, qt.w.provider)
                        }
                    },
                    "cs-article-card-28": {
                        mode: [ue.a5.IdleAfterTtvr, ue.a5.OnHover, ue.a5.OnPageResize],
                        markTtvr: e => {
                            var t, o;
                            return null === (t = e.data) || void 0 === t || null === (o = t.visualReadinessCallback) || void 0 === o ? void 0 : o.call(t, qt.u.VP, qt.w.provider)
                        }
                    },
                    "cs-responsive-card": {
                        mode: [ue.a5.IdleAfterTtvr, ue.a5.OnHover, ue.a5.OnPageResize],
                        markTtvr: e => {
                            var t;
                            return null === (t = e.visualReadinessCallback) || void 0 === t ? void 0 : t.call(e)
                        }
                    },
                    "cs-attribution": {mode: [ue.a5.OnHover]},
                    [(0, Ft.ITY)(r.x.edgeChromiumPageWC)]: {mode: ue.a5.Immediate},
                    [(0, Ft.ITY)(r.x.gridViewFeed)]: {mode: ue.a5.Immediate},
                    [(0, Ft.ITY)(r.x.waterfallViewFeed)]: {mode: ue.a5.Immediate},
                    [(0, Ft.ITY)(r.x.denseCard)]: {mode: ue.a5.Immediate},
                    [(0, Ft.ITY)(r.x.notificationBellWC)]: {mode: ue.a5.Immediate},
                    [(0, Ft.ITY)(r.x.msRewardsWC)]: {mode: [ue.a5.OnHover]},
                    [(0, Ft.ITY)(r.x.waffleWC)]: {mode: [ue.a5.OnHover]},
                    [(0, Ft.ITY)(r.x.socialBarWC)]: {mode: [ue.a5.OnHover]},
                    [(0, Ft.ITY)(r.x.commonSearchBoxEdgeNext)]: {
                        mode: [ue.a5.IdleAfterTtvr, ue.a5.OnHover],
                        markTtvr: () => {
                            (0, Vt.c)((() => {
                                const e = t[L.nz + $.p.searchBox];
                                o && Yt.g.updateVisuallyReadyTiming.getActionSender(o).send({
                                    experienceType: "CommonSearchBoxEdgeNext",
                                    experienceInstance: "CommonSearchBoxEdgeNext",
                                    startTime: void 0,
                                    endTime: e
                                }), (0, L.o_)(r.x.commonSearchBoxEdgeNext, !e, e), (0, L.o_)("SearchBox", !e, e), (0, L.BW)("SearchBox", !e, e)
                            }))
                        }
                    }
                };
                return null === (e = window.ssrLoadedExperience) || void 0 === e || e.subscribe((e => {
                    var r, a, i;
                    (null === (r = n[(0, Ft.ITY)(e.configRef.experienceType)]) || void 0 === r ? void 0 : r.mode) !== ue.a5.Immediate && (n[a = (0, Ft.ITY)(e.configRef.experienceType)] ?? (n[a] = {mode: [ue.a5.IdleAfterTtvr, ue.a5.OnHover]}), (i = n[(0, Ft.ITY)(e.configRef.experienceType)]).markTtvr ?? (i.markTtvr = () => {
                        (0, Vt.c)((() => {
                            const n = t[L.nz + e.configRef.experienceType] || t[L.nz + $.p.complete];
                            o && Yt.g.updateVisuallyReadyTiming.getActionSender(o).send({
                                experienceType: e.configRef.experienceType,
                                experienceInstance: e.instanceId,
                                startTime: void 0,
                                endTime: n
                            }), (0, L.o_)(e.configRef.experienceType, !n, n), Kt[e.configRef.experienceType] && (0, L.o_)(Kt[e.configRef.experienceType], !n, n)
                        }))
                    }))
                })), n
            }

            var Xt;
            const {end: Qt} = (0, S.m)(null === (Xt = performance.getEntriesByName("ClientInit")[0]) || void 0 === Xt ? void 0 : Xt.startTime),
                Zt = (0, k.Ou)();
            Zt.pageStart = performance.now();
            const eo = !0 === window.isSSREnabled && !G.Al.CurrentFlightSet.has("prg-ssrdeferscript"),
                to = !0 === window.isSSREnabled && G.Al.CurrentFlightSet.has("prg-ssrdeferscript");
            eo && (0, pt.B)();
            const oo = (0, Ne._)(V.jG.AppType, V.jG.CurrentRequestTargetScope);
            if (!0 === window.isSSREnabled) {
                var no;
                const e = null === (no = (0, q.$o)().getObject(oo)) || void 0 === no ? void 0 : no.treatments;
                if (e) {
                    const t = e.filter((({type: e}) => e !== Ee._h.layoutPromotion));
                    (0, q.$o)().setObject(oo, {treatments: t})
                }
            }
            const ro = new Y.fH({
                spec: (e => ({
                    ver: `edgenext.${xt.j4.ver}.1`,
                    spec: {
                        ...xt.j4.spec,
                        wpoData: {clientValue: () => (0, q.$o)().getItem(e)},
                        breakpoint: {clientValue: () => (0, yt.wk)(window.innerWidth, _t)}
                    }
                }))(oo)
            }), ao = (0, Y.Nd)(ro.data.locationHref, "locationHref");
            let io = !1;
            (0, K.Cv)(new URLSearchParams(location.search)), (0, C.E)(new P.M(ao)), (0, T.z)(ao, B.Im, G.Al, V.jG.CurrentRequestTargetScope, c);
            const so = (0, A.oA)("entryPoint", "entryPoint"), co = so && so.startMeasure("init").endMeasure;
            (0, J.HB)();
            const lo = async () => {
                try {
                    var e, t;
                    (0, X.ou)(2e3), vt.L.registerDefaultStyleTarget(), (0, St.Zv)();
                    const c = G.Al && G.Al.ClientSettings || {};
                    !function (e) {
                        V.jG.EnableFiveColLayout = !0, V.jG.TrackInfo = {
                            sitePage: {
                                page_product: "anaheim",
                                page_type: e.pagetype
                            }
                        }
                    }(c);
                    const S = Q.c.getQueryParameterByName("title", ao);
                    S && (document.title = S), (0, Te.Wt)((() => {
                        io = !0
                    }));
                    const C = function () {
                        const e = window && window.chrome && window.chrome.ntpSettingsPrivate ? 1 : 0;
                        if (0 === e) return 0;
                        const t = window.chrome.ntpSettingsPrivate.getConfigData ? 2 : 0,
                            o = window.chrome.ntpSettingsPrivate.getPref ? 4 : 0,
                            n = window.chrome.ntpSettingsPrivate.getAllPrefs ? 8 : 0;
                        return e | t | o | n
                    }(), {queryparams: P, aid: T} = c, B = {isAAD: ot()};
                    (0, f.Z5)(B);
                    const A = new pe.o;
                    Ht.Gq.set(E.U.HydrationPromise, A), window.dispatchEvent(new CustomEvent("HydrationPromiseCreated")), Ye(ao, ro, window.isSSREnabled ? A.getResultAsync() : null), kt.D.define(Ct.H.registry), Pt.MJ.define(Tt.j.registry), Bt.Uk.define(Tt.j.registry), (0, W.z)(), function () {
                        const e = () => {
                            let e = {}, t = !1;
                            if (!jt.O.primaryLoadTimeEventSent) {
                                t = !0, jt.O.primaryLoadTimeEventSent = !0;
                                const o = (0, L.bP)(), n = (0, L.bO)(L.oN.Primary);
                                e = o.reduce(((e, t) => (e[t[0]] = t[1], e)), e), e.incompleteMarkers = n.join(","), e.unloadBeforeTTVR = 1
                            }
                            if (!jt.O.secondaryLoadTimeEventSent) {
                                t = !0, jt.O.secondaryLoadTimeEventSent = !0;
                                const o = (0, L.gh)(), n = (0, L.bO)(L.oN.Secondary);
                                e = o.reduce(((e, t) => (e[t[0]] = t[1], e)), e), e.secondaryIncompleteMarkers = n.join(","), e.unloadBeforeSecondaryPerfMarkers = 1
                            }
                            t && Oe.M0.sendLoadTimeEvent({markers: e})
                        };
                        window.addEventListener("beforeunload", e, {once: !0})
                    }();
                    const q = new URLSearchParams(P);
                    if ("true" === q.get("ssrenable") && "vp" === q.get("reqsrc") && !window.isSSREnabled) {
                        const e = document.createElement("div");
                        return e.innerHTML = `SSR VP test detected but did not receive SSR response. Skip page rendering.<br/>Request Id: ${T}`, e.style.cssText = "background-color: #fff; color: #000; font-size: 20px; font-weight: bold;", void document.body.appendChild(e)
                    }
                    const K = (0, Z.m)();
                    Oe.M0.addOrUpdateCustomProperty("server-debug-info", K), Oe.M0.addOrUpdateTmplProperty("edge-apis", C.toString()), (0, Te.jL)(), function (e) {
                        let t = 0;
                        const o = (0, w.Gy)();
                        if (o) {
                            t = Date.now() - Math.round(window.performance.now()) - o
                        }
                        e.refreshDelay = t
                    }(Zt);
                    const J = () => {
                        var e;
                        const t = null !== (e = window) && void 0 !== e && e.isSSRCompleted ? 1 : 0;
                        Oe.M0.addOrUpdateCustomProperty("ssr-completed", t), Zt[$.p.isSSRCompleted] = t, Oe.M0.addOrUpdateTmplProperty("ssr-completed", t.toString()), (0, I.Pj)("renderArch", t ? "ssr" : "fallback-csr"), (0, F.Ep)({
                            name: "TTSR",
                            time: Zt[`${L.nz}${$.p.complete}`]
                        }), window.ssrCpuCost > 0 && (Zt[$.p.ssrCpuCost] = window.ssrCpuCost)
                    };
                    if (eo || to) {
                        Oe.M0.addOrUpdateCustomProperty("ssr-enabled", 1), Oe.M0.addOrUpdateTmplProperty("ssr-enabled", "1"), Zt[$.p.isSSREnabled] = 1;
                        const e = (0, ut.$e)();
                        e && (Oe.M0.addOrUpdateCustomProperty("rs-cluster-name", e), Zt["rs-cluster-name"] = e), to && J(), (0, ue.NU)(Lt), (0, ue.po)(Rt)
                    } else (0, I.Pj)("renderArch", "csr");
                    window && window.NONCE_ID && (o.nc = window.NONCE_ID), (0, ee.rh)(Oe.M0.sendAppErrorEvent.bind(Oe.M0)), (0, bt.A)(), G.Al.IsPrerender || (0, ft.hR)().then((() => {
                        Zt.pagevisible = (0, R.v0)(G.Al.IsPrerender)
                    }));
                    const ae = wt._.getInstance(), ie = ae.rootReducer, Ne = ae.store, Ee = function (e) {
                        let t;
                        return null != e && (t = (0, ht.d)(e), null != t) ? t : null
                    }((0, Y.Nd)(ro.data.wpoData, "wpoData", !1));
                    Ee && Ee.dddTmplHeaderValue && Oe.M0.addOrUpdateTmplString(Ee.dddTmplHeaderValue), me.l.setHandlers({
                        invalidatePageCacheHandler: async () => {
                            await Promise.all([Ie.U.purgeCacheAsync(Ie.R.base), Ie.U.purgeCacheAsync(Ie.R.followedTopics), Ie.U.purgeCacheAsync(Ie.R.subscribedPublishers), Ie.U.purgeCacheAsync(Ie.R.publishersProfile)])
                        }
                    }), te.U.setTargetScopeAndConfigServiceParams(), te.U.initialize(Oe.M0.sendAppErrorEvent.bind(Oe.M0)), (0, ve.Q)();
                    const De = G.Al.CurrentFlightSet.has("ntp-akh3t"), je = G.Al.CurrentFlightSet.has("ntp-akh3c");
                    if (G.Al.CurrentFlightSet.has("ntp-akh3r")) (0, xe.sq)("akmprotocol", void 0, -1, V.jG.IsChinaCompliance ? ".msn.cn" : ".msn.com", "/"); else if (De || je) {
                        const e = (0, xe.ej)("akmprotocol");
                        e && (Oe.M0.addOrUpdateTmplProperty("akmprotocol", e), Ht.Gq.set("akmprotocol", e)), (0, xe.sq)("akmprotocol", De ? "h3" : "h2", 14, V.jG.IsChinaCompliance ? ".msn.cn" : ".msn.com", "/")
                    }
                    const We = {experienceType: "EdgeChromiumPageWC", instanceSrc: "default"},
                        Ge = await te.U.getConfig(We);
                    Zt.CrsConfigReady = Math.round(performance.now());
                    const Ve = Ge && Ge.properties;
                    lt(Ve), await (0, $e.Ki)({
                        instanceId: null,
                        configRef: {experienceType: "ChromiumPageSettings", instanceSrc: "default"}
                    });
                    const Ke = await (0, $e.oU)(n.z.ChromiumPageSettings), Je = await Ke.getLayoutStateAsync();
                    (0, I.Pj)("edgeChromiumLayoutMode", Je.currentLayout), await async function (e) {
                        const t = e.horizontalTabLayoutGap ?? 12, o = e.bufferSizeOverride ?? 32;
                        (0, at.jU)(t);
                        const n = function (e) {
                                return e && e.translucentPadding ? e.translucentPadding : 0
                            }(e),
                            r = [at.xs + o + n - dt(e, 0), at._3 + o + n - dt(e, 1), at.Xn + o + n - dt(e, 2), at.xX + o + n - dt(e, 3), at.sc + o + n - dt(e, 4)],
                            a = new Map([[it.K$.c1, at.xs + o + n - dt(e, 0)], [it.K$.c2, at._3 + o + n - dt(e, 1)], [it.K$.c3, at.Xn + o + n - dt(e, 2)], [it.K$.c4, at.xX + o + n - dt(e, 3)], [it.K$.c5, at.sc + o + n - dt(e, 4)]]);
                        (0, ge.Bn)().useRequestIsolatedTracker = !0, (0, ge.Bn)().breakpoints = r, (0, it.q7)(a)
                    }(Ve), Oe.M0.removeTmplProperty("pageResizeBeforeReady");
                    const Xe = (0, ge.Bn)().currentColumnArrangement, Ze = e => {
                        Oe.M0.addOrUpdateTmplProperty("pageResizeBeforeReady", `${Xe}>${e}`), (0, ge.Bn)().unsubscribe(Ze)
                    };
                    var r;
                    if ((0, ge.Bn)().subscribe(Ze), window.isSSREnabled && "headingsonly" !== Je.selectedFeedDisplaySetting && "off" !== Je.selectedFeedDisplaySetting && await Ot.L.initConfig(), eo) te.U.getEntryPointConfigRef().then((e => (0, Et.Fg)(e))), null === (r = window.ssrLoadedBundles) || void 0 === r || r.subscribe((e => (0, mt.li)(e)));
                    const et = (0, Mt.n)(ie, Ne, ro);
                    if (new ke.m(n.z.MilestoneData, "", ie, new Ce.c, Ne, void 0, ro), new U.i(n.z.BingImageData, "", ae.rootReducer, new O.w, ae.store, void 0, ro), new Re.L(n.z.TopSitesLayoutData, "", ae.rootReducer, new Me.A, ae.store, Ve, ro), new we.D(n.z.ExperienceLoadedData, "", ae.rootReducer, new Se.d, ae.store, void 0, ro), new Fe.m(n.z.SignInData, "", ae.rootReducer, new Le.e, ae.store, void 0, ro), new j.z(n.z.BackgroundData, "", ae.rootReducer, new H.L, ae.store, void 0, ro), (0, Dt.jt)(Ve.enableWpoTopSitesConfigOverride, Ve.topSitesCollapsibleControlConfig), eo && (Zt.DependencyLoadStart = Math.round(performance.now()), (0, $e.Ki)({
                        instanceId: "",
                        configRef: {experienceType: "ExperienceTrackerEdgeNextData", instanceSrc: "default"}
                    }).then((() => {
                        var e;
                        Zt.DependencyLoadEnd = Math.round(performance.now()), null === (e = window.ssrLoadedExperience) || void 0 === e || e.subscribe((e => {
                            Zt[`${e.configRef.experienceType}EagerLoadStart`] = Math.round(performance.now()), requestAnimationFrame((() => setTimeout((() => {
                                (0, Et.Fg)(e)
                            }))))
                        }))
                    }))), ot()) {
                        var a, i;
                        const e = async () => {
                            const e = await (null === V.jG || void 0 === V.jG ? void 0 : V.jG.AccountInfoPromise);
                            return {client: {id: oe.I4, friendlyName: "Enterprise NTP App"}, account: e}
                        };
                        let t = new d.a(new l.W(e));
                        null !== (a = Ve.authManager) && void 0 !== a && a.useRetryDecorator && (t = (0, p.w)(t));
                        const o = null !== (i = Ve.authManager) && void 0 !== i && i.useInMemoryCache ? new u.y : new m.o;
                        (0, g.BV)(new g.U(t, o, h.oc))
                    }
                    Promise.all([(0, qe.lr)(), (0, Pe.F_)()]).then((() => (0, ge.Bn)().unsubscribe(Ze))), Zt.AppStartStart = Math.round(performance.now()), ae.start(), (0, ce.m)().initOverrides = Be.J, Zt.AppStartEnd = Math.round(performance.now());
                    const tt = et.getCurrentState().signedIn, nt = tt === D.Hy.SignedIn, ct = function () {
                        if (ot()) {
                            const e = V.jG.ResolvedAccountInfo;
                            return e && e.account_type && e.account_type === D.Qm.AAD
                        }
                        return !1
                    }();
                    window.isSSREnabled && !G.Al.IsPrerender && (0, Ae.j)(te.U, Je, Ve.enableWaterfallViewFeed);
                    const xt = ot() ? {
                        myFeed: he.iz.MicrosoftNews,
                        productivityHub: he.iz.Office365,
                        following: he.iz.Following
                    } : void 0, yt = await async function (e) {
                        const t = await te.U.getConfig({
                            experienceType: "ExperienceTrackerEdgeNextData",
                            instanceSrc: "default"
                        }), o = null == t ? void 0 : t.properties, {feedContentSourceMap: n} = o || {}, r = e ?? n;
                        return r && (0, st.f)(r)
                    }(xt);
                    !function (e) {
                        let t;
                        V.jG.CurrentRequestTargetScope.audienceMode === He.F.Enterprise ? t = {
                            msnocid: "entnewsntp",
                            pageName: rt(e),
                            pageProduct: "entnews"
                        } : V.jG.CurrentRequestTargetScope.os === Ue.Q.Xbox ? t = {
                            msnocid: "xboxntp",
                            pageName: rt(e),
                            pageProduct: Ue.Q.Xbox
                        } : e === he.iz.Following && Oe.M0.updatePageMetadata({page: {name: rt(e)}}, !0), t && Oe.M0.updatePageMetadata({
                            page: {
                                ocid: t.msnocid,
                                name: t.pageName,
                                product: t.pageProduct
                            }
                        }, !0)
                    }(yt);
                    const _t = "1" === Q.c.getQueryParameterByName("startpage", ao);
                    _t && G.Al.IsPrerender && (!function (e) {
                        const t = () => {
                            const t = (0, k.Ou)();
                            t && (t["DHP.Conversion.Start"] = performance.now());
                            const o = location.href, n = null == o ? void 0 : o.split("?");
                            if (!n || n.length <= 1) return;
                            const r = G.Al.ClientSettings;
                            r.pagetype = "ntp", (0, ze._Y)(r);
                            const a = n[0].substring(n[0].lastIndexOf("/") + 1),
                                i = n[1].split("&").filter((e => "startpage=1" != e)).join("&"),
                                s = i.length > 0 ? a + "?" + i : a;
                            window.history.replaceState({}, document.title, s);
                            const c = {page: {url: window.document.URL, type: "ntp"}};
                            ot() || (c.page.ocid = "msedgntp"), Oe.M0.updatePageMetadata(c), Oe.M0.addOrUpdateTmplProperty("ntpconv", e ? "1" : "0")
                        };
                        e ? t() : (0, Te.Wt)(t)
                    }(io), (0, Te.eq)(io)), Oe.M0.updatePageMetadata({page: {viewType: (0, ge.vi)()}}, !0), B.isMsa = nt && !ct, (0, b.M)(B).then((e => {
                        Oe.M0.updatePageMetadata({user: e}, !0)
                    })), co && co(), (0, $e.oU)(n.z.ChromiumPageSettings).then((async e => {
                        await (0, v.FA)(po, tt);
                        const t = await e.getPrimaryAccountInfoAsync();
                        if (window.chrome && window.chrome.authPrivate ? (window.chrome.authPrivate.onSignInStateChanged.addListener((async () => {
                            const o = await e.getPrimaryAccountInfoAsync(!1), n = (0, xe.ej)(ne.g8);
                            if (o.accountType === z.l.MSA && o.accountId !== t.accountId && !n) return Oe.M0.sendAppErrorEvent({
                                ...M.G0e,
                                message: "Sign In Refresh Required. New browser account found."
                            }), sessionStorage.setItem(x.gQ, "1"), void (0, me.Z)();
                            (0, y.B)(o, null, !0)
                        })), await (0, y.B)(t)) : (0, N.H)(M.c$P, "AuthPrivate property is not available"), t.accountType === z.l.AAD || (0, re.Yn)() === D.Qm.AAD) {
                            const e = 5e3;
                            Promise.race([(0, L.b1)(), (0, de.Kb)(e)]).then((async () => {
                                var e;
                                let t = null === (e = (0, re.Rn)()) || void 0 === e ? void 0 : e.access_token;
                                if (!t) {
                                    var o;
                                    const e = {id: oe.I4, friendlyName: oe.Ak},
                                        n = await (null === (o = (0, g.Kf)()) || void 0 === o ? void 0 : o.getAuthData(e));
                                    t = null == n ? void 0 : n.authToken
                                }
                                const n = await (0, f.ID)(t);
                                if (n) {
                                    !!(0, xe.ej)(le.og) || G.Al.IsPrerender || G.Al.IsPreload || (0, _.R)(n, t)
                                }
                            }))
                        }
                        const n = await e.getLayoutStateAsync(), r = (0, At.y)(n, t.accountType === z.l.MSA);
                        if (Oe.M0) {
                            if (Oe.M0.updatePageConfiguration(r), G.Al.IsPrerender) {
                                Oe.M0.getPageMetadata().updateContract()
                            }
                            const e = G.Al.CurrentFlightSet.has("anhdynpt-t");
                            e && Qe(0, yt), (0, ft.hR)().then((() => {
                                !e && Qe(0, yt), (0, Wt.K)(null, !G.Al.newRidNeeded, null)
                            })), (0, Pe.F_)().then((async () => {
                                (await o.e("ocvFeedback").then(o.bind(o, 5402))).setupOcvTelemetryData()
                            }))
                        }
                        (0, qe.lr)().then((() => {
                            var e, t;
                            if (n.selectedQuickLinksDisplaySetting !== he.Z3.off) try {
                                (0, Te.w$)("TOP_SITES_VISIBLE")
                            } catch (e) {
                                (0, N.OO)(e, M.Qv4, "Error invoking activateTrigger function")
                            }
                            if (window && null !== (e = window.chrome) && void 0 !== e && null !== (e = e.ntpSettingsPrivate) && void 0 !== e && e.logSsrState && null !== (t = window.chrome) && void 0 !== t && null !== (t = t.ntpSettingsPrivate) && void 0 !== t && t.SsrState) {
                                var o, r;
                                const e = _t ? null === (o = window.chrome) || void 0 === o || null === (o = o.ntpSettingsPrivate) || void 0 === o || null === (o = o.PageType) || void 0 === o ? void 0 : o.DHP : null === (r = window.chrome) || void 0 === r || null === (r = r.ntpSettingsPrivate) || void 0 === r || null === (r = r.PageType) || void 0 === r ? void 0 : r.NTP;
                                window.isSSREnabled || window.chrome.ntpSettingsPrivate.logSsrState(window.chrome.ntpSettingsPrivate.SsrState.SSR_NOT_ATTEMPTED, e)
                            }
                        })), (0, w.cu)()
                    })), Promise.all([(0, ft.eC)(), (0, Pe.F_)()]).then((() => {
                        const e = !!document.getElementById("onetrust-consent-sdk");
                        var t;
                        (0, ye.hI)() && !e && Oe.M0.sendAppErrorEvent({
                            ...M.bid,
                            pb: {
                                ...M.bid.pb,
                                customMessage: `oneTrustBannerScript: ${null === (t = document.getElementById(fe.e)) || void 0 === t ? void 0 : t.getAttribute("src")}`
                            }
                        })
                    })), (0, L.pT)(!G.Al.IsPrerender);
                    const It = G.Al.CurrentFlightSet.has("ntp-delay-hydration");
                    eo && (Zt.WaitForCanRenderStart = Math.round(performance.now()), await (0, pt.L)(), Zt.WaitForCanRenderEnd = Math.round(performance.now()), J());
                    const Ft = performance.now(), Ut = "RenderRoot";
                    var s;
                    if (Zt[`${Ut}Start`] = Math.round(Ft), null !== (e = window.ssrAdData) && void 0 !== e && e.length) Zt["TTNativeAd.Serve"] = Zt["TTSR.Complete"], null === (s = window.ssrAdData) || void 0 === s || s.forEach((e => Gt.k.addDedupeIds(e.crids)));
                    (0, $t.o)(await te.U.getEntryPointConfigRef(), "fluent-design-system-provider", {controlCornerRadius: 2}, {hydrationModes: It ? Jt() : void 0}).finally((() => {
                        A.set(), delete window.ssrLayoutState, window.isHydrationCompleted = !0, (eo || to) && (0, ue.$L)(Rt)
                    })).then((async () => {
                        var e, t, o;
                        const n = null === (e = (await (0, L.b1)()).find((e => "TTVR" === e[0]))) || void 0 === e ? void 0 : e[1];
                        let r = n;
                        if (window.isSSRCompleted) {
                            var a, i;
                            const e = performance.getEntriesByName("waterfall-view-feed:hydration.start")[0] ? performance.getEntriesByName("waterfall-view-feed:hydration.start")[0] : performance.getEntriesByName("grid-view-feed:hydration.start")[0],
                                t = performance.getEntriesByName("waterfall-view-feed:hydration.topDownHydrateComplete")[0] ? performance.getEntriesByName("waterfall-view-feed:hydration.topDownHydrateComplete")[0] : performance.getEntriesByName("grid-view-feed:hydration.topDownHydrateComplete")[0];
                            (0, L.su)("FeedHydrationStart", null == e ? void 0 : e.startTime), (0, L.su)("FeedHydrationEnd", null == t ? void 0 : t.startTime), (0, L.su)("PageHydrationStart", null === (a = performance.getEntriesByName("WholePageHydration.start")[0]) || void 0 === a ? void 0 : a.startTime);
                            const o = null === (i = performance.getEntriesByName("WholePageHydration.topDownHydrateComplete")[0]) || void 0 === i ? void 0 : i.startTime;
                            (0, L.su)("PageHydrationEnd", o), o > n && (r = o)
                        }
                        if ((0, L.su)("TTF", r), window && null !== (t = window.chrome) && void 0 !== t && null !== (t = t.ntpSettingsPrivate) && void 0 !== t && t.logSsrState && null !== (o = window.chrome) && void 0 !== o && null !== (o = o.ntpSettingsPrivate) && void 0 !== o && o.SsrState) {
                            var s, c;
                            const e = _t ? null === (s = window.chrome) || void 0 === s || null === (s = s.ntpSettingsPrivate) || void 0 === s || null === (s = s.PageType) || void 0 === s ? void 0 : s.DHP : null === (c = window.chrome) || void 0 === c || null === (c = c.ntpSettingsPrivate) || void 0 === c || null === (c = c.PageType) || void 0 === c ? void 0 : c.NTP;
                            window.isSSREnabled && window.isCSRFallback ? window.chrome.ntpSettingsPrivate.logSsrState(window.chrome.ntpSettingsPrivate.SsrState.SSR_FAILED, e) : window.isSSREnabled && window.isSSRCompleted && window.chrome.ntpSettingsPrivate.logSsrState(window.chrome.ntpSettingsPrivate.SsrState.SSR_SUCCEEDED, e)
                        }
                    }));
                    const Vt = performance.now();
                    if (!It) {
                        const e = document.body.querySelector("fluent-design-system-provider");
                        (0, gt.o)(e, A)
                    }
                    Zt[`${Ut}End`] = Math.round(Vt), Zt[Ut] = Math.round(Vt - Ft), (0, F.QP)({
                        name: Ut,
                        startTime: Ft,
                        endTime: Vt
                    });
                    const qt = _e.A.get(_e.U.CookieConsentStatus);
                    if (null !== G.Al && void 0 !== G.Al && null !== (t = G.Al.CurrentFlightSet) && void 0 !== t && t.has("prg-wpo-clarity")) {
                        const e = qt !== be._.NotRequired;
                        nt || ct || e || (0, Pe.F_)().then((async () => {
                            const e = await o.e("clarity").then(o.bind(o, 57644));
                            e.setupClarity(), V.jG.ClarityEnabled = !0, e.writeBasicTags()
                        }))
                    }
                    (0, Pe.F_)().then((() => {
                        (0, Nt.b)((0, k.Ou)(), (0, k.WP)(), G.Al.IsPrerender)
                    })), !window.isSSREnabled && Ve.compressionDictionaryEnabled && document.createElement("link").relList.supports("dictionary") && Oe.M0.addOrUpdateTmplProperty("sbr", "0"), "visible" === document.visibilityState && (0, Te.fL)(), function () {
                        let e = !1;
                        Promise.all([(0, qe.lr)(), (0, L.b1)()]).then((() => {
                            e = !0
                        }));
                        const t = () => {
                            if (!(0, se.j)()) return;
                            const t = {};
                            Oe.M0.isContentViewBeaconSent() || (t.cv = {
                                queued: Oe.M0.isEventInQueue("ContentView") ? 1 : 0,
                                ttvr: e ? 1 : 0
                            }), (0, zt.V1)() || Oe.M0.isPageViewBeaconSent() || (t.pv = {
                                queued: Oe.M0.isEventInQueue("PageView") ? 1 : 0,
                                ttvr: e ? 1 : 0
                            }), Object.keys(t).length && Oe.M0.sendLoadTimeEvent({markers: t})
                        };
                        window.addEventListener("beforeunload", t, {once: !0})
                    }(), Qt()
                } catch (e) {
                    await async function (e, t) {
                        const o = "isNetworkFailure" in e && e.isNetworkFailure,
                            n = "Encountered a critical app error.", r = o ? M.u6c : M.lWE;
                        if ((0, N.OO)(e, r, n), !t) {
                            const t = o ? M.aF1 : M.u4m, r = o ? M.Wzw : M.Jtn;
                            It.F.tryReloadNtpPage(t, r, n, e)
                        }
                    }(e), Qt(!0)
                } finally {
                    (0, ae.D)((() => Oe.M0.sendAppErrorEvent)), (0, ie.g)((() => Oe.M0.sendAppErrorEvent))
                }
            };

            function po(e) {
                Oe.M0.sendAppErrorEvent({
                    ...M.Ggm,
                    message: "Error while fetching APP_ANON cookie.",
                    pb: {...M.Ggm.pb, customMessage: `Error: ${e}`, stack: e.stack}
                })
            }

            !async function () {
                var e, t, n, r, a;
                const i = (null === G.Al || void 0 === G.Al || null === (e = G.Al.ClientSettings) || void 0 === e || null === (e = e.detection) || void 0 === e ? void 0 : e.isMsft) || (null === G.Al || void 0 === G.Al || null === (t = G.Al.ClientSettings) || void 0 === t || null === (t = t.detection) || void 0 === t ? void 0 : t.isCorpNet);
                if ((null === (n = (0, Ut.zp)()) || void 0 === n ? void 0 : n.includes("item=spalink")) && (null === (r = (0, Ut.zp)()) || void 0 === r || !r.includes("reqsrc=vp")) && (null === (a = (0, Ut.zp)()) || void 0 === a || !a.includes("noindicator")) && i) {
                    !function () {
                        if (console.error.toString().includes("[native code]")) {
                            const e = console.error;
                            console.error = (...t) => {
                                const o = Ht.Gq.get(E.U.ErrorLogHistory, (() => []));
                                e(...t), o.push(t), window.dispatchEvent(new CustomEvent("ErrorLogHistoryUpdated"))
                            }
                        }
                    }(), await (0, pt.L)();
                    const {RenderModeIndicator: e} = await Promise.all([o.e("common-cscore"), o.e("web-components_render-mode-indicator_dist_index_js")]).then(o.bind(o, 95469)),
                        t = document.createElement("render-mode-indicator");
                    document.body.appendChild(t)
                }
            }(), window.SSRONLY ? window.startPage = lo : lo()
        }, 24478: function (e, t, o) {
            "use strict";
            o.d(t, {
                m4: function () {
                    return n.m
                }
            });
            var n = o(52633);
            o(3251)
        }, 52633: function (e, t, o) {
            "use strict";
            o.d(t, {
                m: function () {
                    return r
                }
            });

            function n(e) {
                const t = e;
                return void 0 !== t.clientValue ? t.clientValue : Object.keys(e).reduce(((t, o) => Object.assign(Object.assign({}, t), {[o]: n(e[o])})), {})
            }

            class r {
                constructor(e, t) {
                    this.spec = e, this.qspPrefix = t || "rd"
                }

                get verParam() {
                    return `${this.qspPrefix}.ver`
                }

                get data() {
                    return void 0 === this.memo && (this.memo = n(this.spec.spec)), this.memo
                }

                loadQueryParams(e) {
                    if (void 0 !== this.memo) throw "overwriting existing query string parameters.";
                    const t = e.get([this.qspPrefix, "ver"].join("."));
                    if (t !== this.spec.ver) throw `unmatched spec version: expected "${this.spec.ver}" but got ${t}.`;
                    this.memo = {}, e.forEach(((e, t) => {
                        if (!t.startsWith(this.qspPrefix)) return;
                        if (t === this.verParam) return;
                        const o = t.split(".").slice(1);
                        let n = this.memo;
                        o.forEach(((t, r) => {
                            let a = {};
                            if (r === o.length - 1) try {
                                a = () => JSON.parse(e)
                            } catch (e) {
                                throw this.memo = void 0, e
                            }
                            Object.prototype.hasOwnProperty.call(n, t) || (n[t] = a), "object" != typeof a || (n = n[t])
                        }))
                    }))
                }

                getURLSearchParams() {
                    const e = new URLSearchParams, t = (o, n) => {
                        Object.keys(o).forEach((r => {
                            const a = o[r], i = [...n, r];
                            "object" != typeof a ? e.append(i.join("."), JSON.stringify(a())) : t(a, i)
                        }))
                    };
                    return t(this.data, [this.qspPrefix]), e.sort(), e.append(this.verParam, this.spec.ver), e
                }

                getSerializedData() {
                    return this.getURLSearchParams().toString()
                }
            }
        }, 25466: function (e, t, o) {
            "use strict";
            var n;
            !function (e) {
                e.JSON = "application/json;charset=UTF-8", e.HTML = "text/html;charset=UTF-8"
            }(n = n || (n = {}))
        }, 3251: function (e, t, o) {
            "use strict";
            o(25466)
        }, 54556: function (e, t, o) {
            "use strict";
            o.d(t, {
                FB: function () {
                    return _
                }, Rn: function () {
                    return w
                }, lq: function () {
                    return C
                }
            });
            var n = o(33940), r = o(59833), a = o(85594), i = o(45069), s = o(46058), c = o(45927), d = o(14377),
                l = o(93590), p = o(36e3), u = o(92530), m = o(16386), g = o(93570), h = o(75197);
            const f = "ClickedBeaconAttached", b = "ViewedBeaconAttached", v = "UserActionBeaconAttached",
                x = new WeakSet, y = ["control icon-only", "menu", "ad-label", "ad-choice"], _ = "WebViewVisible";
            let w;

            class S {
                constructor(e) {
                    this.options = e
                }

                createHTML(e) {
                    return r.Lu.attribute(e(this))
                }

                createBehavior() {
                    return new k(this.options, this.targetNodeId)
                }
            }

            class k {
                constructor(e, t) {
                    this.options = e, this.targetNodeId = t, this.beaconService = null, this.nativeAdBeaconsSetAttribute = "nab", this.adsFlights = "", this.onClick = (e, t) => o => {
                        if (o.target === o.currentTarget) {
                            const e = o.composedPath();
                            for (let t = 0; t < 7 && t < e.length; t++) {
                                const o = e[t];
                                if (o.className && y.includes(o.className)) return
                            }
                            return this.fireClickedBeacon(), void this.handleClickUserAction(o)
                        }
                        if (!this.isTelemetryWc(o.currentTarget)) return;
                        const n = this.getImmediateChildFromTelemetryWc(o.currentTarget);
                        if (o.target === n) {
                            var r, a;
                            if (o.currentTarget.clickedBeacon) this.fireTelemetryWcClickedBeacon(o), null === (r = (a = this.userActionLog).fireClickLog) || void 0 === r || r.call(a, e, t, o);
                            o.currentTarget.clickedUserAction && this.handleClickUserAction(o), o.currentTarget.clickedTelemetry && this.handleClickTelemetry(o)
                        }
                    }, this.fireTelemetryWcClickedBeacon = e => {
                        const t = e.composedPath();
                        let o = !1;
                        for (let n = t.length - 1; n >= 0; n--) if (e.currentTarget !== t[n]) {
                            if (o && this.isTelemetryWc(t[n])) return
                        } else o = !0;
                        this.fireClickedBeacon()
                    }, this.fireClickedBeacon = () => {
                        this.beaconService.fireClickTrackingCall(this.clickBeacons, this.beaconsJson), this.options.isClarityEnabled && m.V.writeCustomTag("NativeAdHasBeenClicked", !0)
                    }, this.getImmediateChildFromTelemetryWc = e => {
                        if (this.isTelemetryWc(e) && e.children.length > 0) return e.children[0]
                    }, this.getUserActionBeacons = e => {
                        const t = JSON.parse(e), o = t && t.trb;
                        if (this.userActionBeacons = new Array, o) for (let e = 0; e < o.length; e++) if (o[e].includes("srtb.msn.com")) {
                            const t = new URL(o[e]);
                            t.pathname = t.pathname.replace("served", "useraction"), this.userActionBeacons.push(t)
                        }
                    }, this.onUserActionEvt = e => {
                        e.stopPropagation();
                        const {eventType: t, dur: o, message: n, element: r} = e.detail;
                        this.onUserActionCore(t, o, n, r)
                    }, this.onUserActionCore = (e, t, o, n) => {
                        if (this.userActionBeacons) for (let r = 0; r < this.userActionBeacons.length; r++) {
                            for (const e of Object.values(i.Cw)) this.userActionBeacons[r].searchParams.delete(e);
                            if (e) {
                                this.userActionBeacons[r].searchParams.set(i.Cw.EventType, e), this.userActionBeacons[r].searchParams.set(i.Cw.Timestamp, (this.start ? (new Date).getTime() - this.start : 0).toString()), this.userActionBeacons[r].searchParams.set(i.Cw.Duration, t || 0);
                                const a = {m: o, f: this.adsFlights};
                                this.userActionBeacons[r].searchParams.set(i.Cw.Message, JSON.stringify(a)), this.userActionBeacons[r].searchParams.set(i.Cw.Element, n || "")
                            }
                            this.beaconService.fireUserActionBeacon(this.userActionBeacons[r].href)
                        }
                    }, this.isTelemetryWc = e => e.tagName && "msn-native-ad-telemetry" === e.tagName.toLowerCase(), this.handleClickUserAction = e => {
                        var t, o, n;
                        const r = this.getClickTarget(e), a = [];
                        null != r && null !== (t = r.tagName) && void 0 !== t && t.toLowerCase && a.push(null == r ? void 0 : r.tagName.toLowerCase()), null != r && null !== (o = r.className) && void 0 !== o && o.toLowerCase && a.push(null == r ? void 0 : r.className.toLowerCase()), null != r && null !== (n = r.id) && void 0 !== n && n.toLowerCase && a.push(null == r ? void 0 : r.id.toLowerCase())
                    }, this.handleClickTelemetry = e => {
                        const t = this.getClickTarget(e);
                        e.currentTarget.dataset.t && (t.dataset.t = e.currentTarget.dataset.t, delete e.currentTarget.dataset.t, c.u.addElement(t))
                    }, this.getBindingSource = e => {
                        var t, o, n, r, a;
                        return e instanceof HTMLElement ? ["native-ad-wc", "msn-native-ad-title-mask"].includes(null == e || null === (t = e.tagName) || void 0 === t ? void 0 : t.toLocaleLowerCase()) ? e.adData : ["boost-ad-card"].includes(null == e || null === (o = e.tagName) || void 0 === o ? void 0 : o.toLocaleLowerCase()) ? e.boostAdData : ["cashback-template-halfu-card"].includes(null == e || null === (n = e.tagName) || void 0 === n ? void 0 : n.toLocaleLowerCase()) ? e.productData : ["win-app-wc"].includes(null == e || null === (r = e.tagName) || void 0 === r ? void 0 : r.toLocaleLowerCase()) ? e.winAppData : ["promoted-ad-wc"].includes(null == e || null === (a = e.tagName) || void 0 === a ? void 0 : a.toLocaleLowerCase()) ? e.promotedAdData : e.data : e
                    }
                }

                bind(e) {
                    var t, o;
                    const {context: n, source: r, targets: a} = e;
                    var i;
                    Array.isArray(null === l.jG || void 0 === l.jG || null === (t = l.jG.CurrentRequestTargetScope) || void 0 === t ? void 0 : t.pageExperiments) && (this.adsFlights = (0, u.Z)(d.N, null === l.jG || void 0 === l.jG || null === (i = l.jG.CurrentRequestTargetScope) || void 0 === i ? void 0 : i.pageExperiments).join(";"));
                    this.target = a[this.targetNodeId];
                    const {
                        beaconsJson: c,
                        adBeaconServiceConfig: p,
                        clickBeacons: m,
                        geminiViewabilityDataJson: y,
                        bingTrackerUrls: S,
                        items: k,
                        videoViewabilityData: C,
                        isClarityEnabled: P,
                        isProng2Promotion: T,
                        isProng1Promotion: B
                    } = this.getBindingSource(r);
                    if (c && m && (null === (o = window.adsListened) || void 0 === o || !o.includes(r.id)) && (this.start = (new Date).getTime(), this.options.isClarityEnabled = P, this.beaconsJson = c, this.clickBeacons = m, this.geminiViewabilityDataJson = y, this.beaconService = new s.A(p), T && g.gL.subscribe(g.Iq.IsDashboardVisible, (async e => {
                        e && this.options.shouldCallVisibilityBeacon && (this.beaconService.elementVisibilityObserver(this.target, c, y, k && k[0] ? k[0].uniqueId : void 0, S, C, r, n), this.target[b] = !0)
                    })), B && document.addEventListener(_, w = () => {
                        this.options.shouldCallVisibilityBeacon && (this.beaconService.elementVisibilityObserver(this.target, c, y, k && k[0] ? k[0].uniqueId : void 0, S, C, r, n), this.target[b] = !0)
                    }), !(0, h.Un)() && B && this.options.shouldCallVisibilityBeacon && (this.beaconService.elementVisibilityObserver(this.target, c, y, k && k[0] ? k[0].uniqueId : void 0, S, C, r, n), this.target[b] = !0), this.options.shouldCallClickBeacon && (window._pageTimings["TTNativeAd.ClickListened"] || (window._pageTimings["TTNativeAd.ClickListened"] = performance.now()), this.target.addEventListener("click", this.onClick(r, n)), this.target[f] = !0), this.options.shouldWatchCustomEvent && (this.getUserActionBeacons(c), this.target.addEventListener("NativeAdUserAction", this.onUserActionEvt), this.target[v] = !0), this.options.shouldCallVisibilityBeacon && !T && !B)) {
                        if (C) {
                            if (x.has(this.target)) return;
                            x.add(this.target)
                        }
                        window._pageTimings["TTNativeAd.ViewListened"] || (window._pageTimings["TTNativeAd.ViewListened"] = performance.now()), this.beaconService.elementVisibilityObserver(this.target, c, y, k && k[0] ? k[0].uniqueId : void 0, S, C, r, n), this.target[b] = !0
                    }
                }

                unbind() {
                }

                getClickTarget(e) {
                    if ("adChoice" === e.currentTarget.telemetryMetadata && e.composedPath && "function" == typeof e.composedPath) {
                        const t = e.composedPath();
                        for (let e = 0; e < t.length; ++e) {
                            const o = t[e];
                            if (o.tagName && "a" === o.tagName.toLowerCase() && "native-ad-ad-choice" === o.className.toLowerCase()) return o
                        }
                    }
                    if (!e.composedPath || "function" != typeof e.composedPath) return e.target;
                    {
                        const t = e.composedPath();
                        if (t.length > 0) return t[0]
                    }
                }
            }

            function C(e = !0, t = !0, o = !1) {
                return new S({shouldCallClickBeacon: e, shouldCallVisibilityBeacon: t, shouldWatchCustomEvent: o})
            }

            (0, n.gn)([(0, p.f3)(i.Km)], k.prototype, "userActionLog", void 0), a.m0.define(S)
        }, 16386: function (e, t, o) {
            "use strict";
            o.d(t, {
                V: function () {
                    return r
                }
            });
            const n = {
                adCarousel: "NativeAdCarouselEnabled",
                allowedAssets: "NativeAdAllowedAssets",
                animatedImage: "NativeAdAnimatedImageType",
                landscapeOverlay: "NativeAdLandscapeOverlayEnabled",
                progressiveDisplay: "NativeAdProgressiveDisplayEnabled",
                templateType: "NativeAdTemplateType"
            }, r = new class {
                constructor() {
                    this.loggedTags = {}
                }

                writeCustomTag(e, t) {
                    if (window.clarity && null != t) {
                        const o = t.toString();
                        this.loggedTags[e] && this.loggedTags[e][o] || (window.clarity("set", e, o), this.loggedTags[e] = this.loggedTags[e] || {}, this.loggedTags[e][o] = !0)
                    }
                }

                logAdTemplateConfig(e) {
                    e && Object.keys(n).forEach((t => {
                        this.writeCustomTag(n[t], e[t])
                    }))
                }
            }
        }, 339: function (e, t, o) {
            "use strict";
            o.d(t, {
                n: function () {
                    return R
                }
            });
            var n = o(40015);
            const r = (0, n.AF)("MsftFeedModule", (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-infopane-carouselcard"), o.e("web-components_info-pane_dist_info-pane-panel_index_js-web-components_info-pane_dist_info-pan-71501c")]).then(o.bind(o, 17850)))),
                a = (0, n.AF)("CsFeedInfopane24Module", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_feed-layout_dist_Utils_js-libs_river-data-t-f9dc83")]).then(o.bind(o, 69240)))),
                i = (0, n.AF)("CsFeedInfopane28Module", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_feed-layout_dist_Utils_js-libs_river-data-t-0dcd68")]).then(o.bind(o, 68908)))),
                s = (0, n.AF)("CsFeedInfopaneImmersiveModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-9d384c")]).then(o.bind(o, 22201)))),
                c = (0, n.AF)("CsFeedInfopaneModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_feed-layout_dist_Utils_js-libs_river-data-t-92d2f3")]).then(o.bind(o, 13827)))),
                d = (0, n.AF)("MsftInfopaneModule", (() => Promise.all([o.e("common-feed-libs"), o.e("common-cscore"), o.e("common-infopane-carouselcard"), o.e("web-components_info-pane_dist_info-pane-panel_index_js-web-components_info-pane_dist_info-pan-71501c")]).then(o.bind(o, 82940)))),
                l = (0, n.AF)("CsFeedNoHoverModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-d2460f")]).then(o.bind(o, 8907)))),
                p = (0, n.AF)("CsFeedNoHoverWithTopAdModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-web-components_native-ad-logo_dist_templat-f22c49")]).then(o.bind(o, 9660)))),
                u = (0, n.AF)("CsFeedLightNoHoverModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-3c2e6b")]).then(o.bind(o, 42508)))),
                m = (0, n.AF)("CsFeedNoHoverChannelModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-597e56")]).then(o.bind(o, 14655)))),
                g = (0, n.AF)("CsFeedUnderlineModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-481e71")]).then(o.bind(o, 70933)))),
                h = (0, n.AF)("CsFeedHoverShowAbstractModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-401e79")]).then(o.bind(o, 29559)))),
                f = (0, n.AF)("CsFeedHoverShowWholeTitleModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-966c12")]).then(o.bind(o, 34504)))),
                b = (0, n.AF)("CsFeedRIS1Module", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_ads-utils_dist_logging_sendAdImageLoadError_js-libs_channel-page-utils_dist_UrlUtilities-15ed8d")]).then(o.bind(o, 7331)))),
                v = (0, n.AF)("CsFeedAdsLoggingModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_ads-utils_dist_logging_sendAdImageLoadError_js-libs_channel-page-utils_dist_UrlUtilities-f3ea1b")]).then(o.bind(o, 72498)))),
                x = (0, n.AF)("CsFeedAdsCTAModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_ads-utils_dist_logging_sendAdImageLoadError_js-libs_channel-page-utils_dist_UrlUtilities-5c04fa")]).then(o.bind(o, 66683)))),
                y = (0, n.AF)("CsFeedSmallerFontModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-4ade5d")]).then(o.bind(o, 42396)))),
                _ = (0, n.AF)("CsFeedT1FontModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-25b0dd")]).then(o.bind(o, 50706)))),
                w = (0, n.AF)("CsFeedT2FontModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-f11189")]).then(o.bind(o, 63645)))),
                S = (0, n.AF)("CsFeedVideoCardModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-fd419c")]).then(o.bind(o, 81131)))),
                k = (0, n.AF)("CsFeedDescriptionModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-17dd4b")]).then(o.bind(o, 65991)))),
                C = (0, n.AF)("CsFeedSafeAdsModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-f659a4")]).then(o.bind(o, 36132)))),
                P = (0, n.AF)("CsFeedEntNewsModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-784ba0")]).then(o.bind(o, 98895)))),
                T = (0, n.AF)("CsFeedImmersiveModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_feed-layout_dist_Utils_js-libs_river-data-t-6ee41c")]).then(o.bind(o, 26380)))),
                B = (0, n.AF)("CsFeedT1FullModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-f89982")]).then(o.bind(o, 682)))),
                A = (0, n.AF)("CsFeedGeometricAdsModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-b50a1e")]).then(o.bind(o, 88421)))),
                I = (0, n.AF)("CsFeedModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-38e633")]).then(o.bind(o, 51925)))),
                F = (0, n.AF)("CsWaterfallFeedModule", (() => Promise.all([o.e("common-feed-libs"), o.e("cs-core-desktop_responsive-card_dist_index_js-libs_feed-layout_dist_Utils_js-libs_views-helpe-3fb136")]).then(o.bind(o, 505)))),
                L = ((0, n.AF)("CsResponsiveInfopaneModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("cs-core-desktop_info-pane_dist_index_js-cs-core-desktop_responsive-card_dist_index_js-libs_co-08bdf1")]).then(o.bind(o, 84027)))), (0, n.AF)("CsCTALogoModule", (() => Promise.all([o.e("common-others"), o.e("common-feed-libs"), o.e("common-cscore"), o.e("libs_core_dist_interaction-tracker_MouseTracker_js-web-components_native-ad-logo_dist_templat-35ddb4")]).then(o.bind(o, 18085)))));

            async function R(e) {
                if (!e || !e.enableSuperCardsBundles) return void await r();
                let t = !1;
                const o = [];
                e.enableSuperInfopaneCard24Bundles ? (o.push(a()), t = !0) : e.enabSupInfopane28Bundles ? (o.push(i()), t = !0) : e.enableSuperInfopaneCardImmersiveBundles ? (o.push(s()), t = !0) : e.enableSuperInfopaneCardBundles ? (o.push(c()), t = !0) : e.enableSuperCardsMLiteBundles || e.disableInfoPaneBundle || o.push(d()), e.enableTopAdCardBundles && (o.push(p()), t = !0), e.enableSuperCardsMobileBundles && (o.push(l()), t = !0), e.enableSuperCardsMLiteBundles && (o.push(u()), t = !0), e.enableSuperCardsChannel && (o.push(m()), t = !0), e.enableSuperCardsUnderlineBundles && (o.push(g()), t = !0), e.enableSuperCardsHoverShowAbstractBundles && (o.push(h()), t = !0), e.enableSuperCardsHoverShowWholeTitleBundles && (o.push(f()), t = !0), e.enableSuperCardsRIS1Bundle && (o.push(b()), t = !0), (e.enableSuperCardsAdsLoggingBundles || e.enableSuperCardsAdsImprLog) && (o.push(v()), t = !0), e.enableSuperCardsAdsCTABundles && (o.push(x()), t = !0), e.enableSuperCardsSmallerFontBundles && (o.push(y()), t = !0), e.enableSuperCardsT1FontBundles && (o.push(_()), t = !0), e.enableSuperCardsT2FontBundles && (o.push(w()), t = !0), e.enableSuperVideoCardBundles && (o.push(S()), t = !0), e.enableSuperCardsDescriptionBundles && (o.push(k()), t = !0), e.enableSuperCardsSafeBundles && (o.push(C()), t = !0), e.enableEntNewsBundles && (o.push(P()), t = !0), e.enableSuperCardsImmersiveBundles && (o.push(T()), t = !0), e.enableSuperCardsT1FullBundles && (o.push(B()), t = !0), e.enableSuperCardsGeometricBundles && (o.push(A()), t = !0), (e.enableFeed3Cards || e.enableResponsiveCards) && o.push(F()), (e.enableCTA || e.enableLogo) && o.push(L()), t || o.push(I()), await Promise.all(o)
            }
        }, 17692: function (e, t, o) {
            "use strict";

            function n() {
                return n = Object.assign ? Object.assign.bind() : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var o = arguments[t];
                        for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }

            o.d(t, {
                Z: function () {
                    return n
                }
            })
        }, 7209: function (e, t, o) {
            "use strict";

            function n(e) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, n(e)
            }

            o.d(t, {
                Z: function () {
                    return n
                }
            })
        }, 55090: function (e, t, o) {
            "use strict";

            function n(e) {
                return e.split("-")[0]
            }

            function r(e) {
                return e.split("-")[1]
            }

            function a(e) {
                return ["top", "bottom"].includes(n(e)) ? "x" : "y"
            }

            function i(e) {
                return "y" === e ? "height" : "width"
            }

            function s(e, t, o) {
                let {reference: s, floating: c} = e;
                const d = s.x + s.width / 2 - c.width / 2, l = s.y + s.height / 2 - c.height / 2, p = a(t), u = i(p),
                    m = s[u] / 2 - c[u] / 2, g = "x" === p;
                let h;
                switch (n(t)) {
                    case"top":
                        h = {x: d, y: s.y - c.height};
                        break;
                    case"bottom":
                        h = {x: d, y: s.y + s.height};
                        break;
                    case"right":
                        h = {x: s.x + s.width, y: l};
                        break;
                    case"left":
                        h = {x: s.x - c.width, y: l};
                        break;
                    default:
                        h = {x: s.x, y: s.y}
                }
                switch (r(t)) {
                    case"start":
                        h[p] -= m * (o && g ? -1 : 1);
                        break;
                    case"end":
                        h[p] += m * (o && g ? -1 : 1)
                }
                return h
            }

            o.d(t, {
                Me: function () {
                    return ie
                }, oo: function () {
                    return pe
                }, RR: function () {
                    return ce
                }, Cp: function () {
                    return le
                }, uY: function () {
                    return se
                }, dp: function () {
                    return de
                }
            });

            function c(e) {
                return "number" != typeof e ? function (e) {
                    return {top: 0, right: 0, bottom: 0, left: 0, ...e}
                }(e) : {top: e, right: e, bottom: e, left: e}
            }

            function d(e) {
                return {...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height}
            }

            async function l(e, t) {
                var o;
                void 0 === t && (t = {});
                const {
                        x: n,
                        y: r,
                        platform: a,
                        rects: i,
                        elements: s,
                        strategy: l
                    } = e, {
                        boundary: p = "clippingAncestors",
                        rootBoundary: u = "viewport",
                        elementContext: m = "floating",
                        altBoundary: g = !1,
                        padding: h = 0
                    } = t, f = c(h), b = s[g ? "floating" === m ? "reference" : "floating" : m],
                    v = d(await a.getClippingRect({
                        element: null == (o = await (null == a.isElement ? void 0 : a.isElement(b))) || o ? b : b.contextElement || await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(s.floating)),
                        boundary: p,
                        rootBoundary: u,
                        strategy: l
                    })),
                    x = d(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                        rect: "floating" === m ? {
                            ...i.floating,
                            x: n,
                            y: r
                        } : i.reference,
                        offsetParent: await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(s.floating)),
                        strategy: l
                    }) : i[m]);
                return {
                    top: v.top - x.top + f.top,
                    bottom: x.bottom - v.bottom + f.bottom,
                    left: v.left - x.left + f.left,
                    right: x.right - v.right + f.right
                }
            }

            const p = Math.min, u = Math.max;

            function m(e, t, o) {
                return u(e, p(t, o))
            }

            const g = {left: "right", right: "left", bottom: "top", top: "bottom"};

            function h(e) {
                return e.replace(/left|right|bottom|top/g, (e => g[e]))
            }

            function f(e, t, o) {
                void 0 === o && (o = !1);
                const n = r(e), s = a(e), c = i(s);
                let d = "x" === s ? n === (o ? "end" : "start") ? "right" : "left" : "start" === n ? "bottom" : "top";
                return t.reference[c] > t.floating[c] && (d = h(d)), {main: d, cross: h(d)}
            }

            const b = {start: "end", end: "start"};

            function v(e) {
                return e.replace(/start|end/g, (e => b[e]))
            }

            const x = ["top", "right", "bottom", "left"];
            x.reduce(((e, t) => e.concat(t, t + "-start", t + "-end")), []);

            function y(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function _(e) {
                return x.some((t => e[t] >= 0))
            }

            function w(e) {
                return "x" === e ? "y" : "x"
            }

            const S = Math.min, k = Math.max, C = Math.round, P = Math.floor, T = e => ({x: e, y: e});

            function B(e) {
                return F(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function A(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function I(e) {
                var t;
                return null == (t = (F(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function F(e) {
                return e instanceof Node || e instanceof A(e).Node
            }

            function L(e) {
                return e instanceof Element || e instanceof A(e).Element
            }

            function R(e) {
                return e instanceof HTMLElement || e instanceof A(e).HTMLElement
            }

            function M(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof A(e).ShadowRoot)
            }

            function N(e) {
                const {overflow: t, overflowX: o, overflowY: n, display: r} = H(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + n + o) && !["inline", "contents"].includes(r)
            }

            function E(e) {
                return ["table", "td", "th"].includes(B(e))
            }

            function $(e) {
                const t = D(), o = H(e);
                return "none" !== o.transform || "none" !== o.perspective || !!o.containerType && "normal" !== o.containerType || !t && !!o.backdropFilter && "none" !== o.backdropFilter || !t && !!o.filter && "none" !== o.filter || ["transform", "perspective", "filter"].some((e => (o.willChange || "").includes(e))) || ["paint", "layout", "strict", "content"].some((e => (o.contain || "").includes(e)))
            }

            function D() {
                return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function j(e) {
                return ["html", "body", "#document"].includes(B(e))
            }

            function H(e) {
                return A(e).getComputedStyle(e)
            }

            function U(e) {
                return L(e) ? {scrollLeft: e.scrollLeft, scrollTop: e.scrollTop} : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function O(e) {
                if ("html" === B(e)) return e;
                const t = e.assignedSlot || e.parentNode || M(e) && e.host || I(e);
                return M(t) ? t.host : t
            }

            function W(e) {
                const t = O(e);
                return j(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : R(t) && N(t) ? t : W(t)
            }

            function z(e, t, o) {
                var n;
                void 0 === t && (t = []), void 0 === o && (o = !0);
                const r = W(e), a = r === (null == (n = e.ownerDocument) ? void 0 : n.body), i = A(r);
                return a ? t.concat(i, i.visualViewport || [], N(r) ? r : [], i.frameElement && o ? z(i.frameElement) : []) : t.concat(r, z(r, [], o))
            }

            function G(e) {
                const t = H(e);
                let o = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
                const r = R(e), a = r ? e.offsetWidth : o, i = r ? e.offsetHeight : n, s = C(o) !== a || C(n) !== i;
                return s && (o = a, n = i), {width: o, height: n, $: s}
            }

            function V(e) {
                return L(e) ? e : e.contextElement
            }

            function q(e) {
                const t = V(e);
                if (!R(t)) return T(1);
                const o = t.getBoundingClientRect(), {width: n, height: r, $: a} = G(t);
                let i = (a ? C(o.width) : o.width) / n, s = (a ? C(o.height) : o.height) / r;
                return i && Number.isFinite(i) || (i = 1), s && Number.isFinite(s) || (s = 1), {x: i, y: s}
            }

            const Y = T(0);

            function K(e) {
                const t = A(e);
                return D() && t.visualViewport ? {x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop} : Y
            }

            function J(e, t, o, n) {
                void 0 === t && (t = !1), void 0 === o && (o = !1);
                const r = e.getBoundingClientRect(), a = V(e);
                let i = T(1);
                t && (n ? L(n) && (i = q(n)) : i = q(e));
                const s = function (e, t, o) {
                    return void 0 === t && (t = !1), !(!o || t && o !== A(e)) && t
                }(a, o, n) ? K(a) : T(0);
                let c = (r.left + s.x) / i.x, l = (r.top + s.y) / i.y, p = r.width / i.x, u = r.height / i.y;
                if (a) {
                    const e = A(a), t = n && L(n) ? A(n) : n;
                    let o = e, r = o.frameElement;
                    for (; r && n && t !== o;) {
                        const e = q(r), t = r.getBoundingClientRect(), n = H(r),
                            a = t.left + (r.clientLeft + parseFloat(n.paddingLeft)) * e.x,
                            i = t.top + (r.clientTop + parseFloat(n.paddingTop)) * e.y;
                        c *= e.x, l *= e.y, p *= e.x, u *= e.y, c += a, l += i, o = A(r), r = o.frameElement
                    }
                }
                return d({width: p, height: u, x: c, y: l})
            }

            const X = [":popover-open", ":modal"];

            function Q(e) {
                return X.some((t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                }))
            }

            function Z(e) {
                return J(I(e)).left + U(e).scrollLeft
            }

            function ee(e, t, o) {
                let n;
                if ("viewport" === t) n = function (e, t) {
                    const o = A(e), n = I(e), r = o.visualViewport;
                    let a = n.clientWidth, i = n.clientHeight, s = 0, c = 0;
                    if (r) {
                        a = r.width, i = r.height;
                        const e = D();
                        (!e || e && "fixed" === t) && (s = r.offsetLeft, c = r.offsetTop)
                    }
                    return {width: a, height: i, x: s, y: c}
                }(e, o); else if ("document" === t) n = function (e) {
                    const t = I(e), o = U(e), n = e.ownerDocument.body,
                        r = k(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
                        a = k(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
                    let i = -o.scrollLeft + Z(e);
                    const s = -o.scrollTop;
                    return "rtl" === H(n).direction && (i += k(t.clientWidth, n.clientWidth) - r), {
                        width: r,
                        height: a,
                        x: i,
                        y: s
                    }
                }(I(e)); else if (L(t)) n = function (e, t) {
                    const o = J(e, !0, "fixed" === t), n = o.top + e.clientTop, r = o.left + e.clientLeft,
                        a = R(e) ? q(e) : T(1);
                    return {width: e.clientWidth * a.x, height: e.clientHeight * a.y, x: r * a.x, y: n * a.y}
                }(t, o); else {
                    const o = K(e);
                    n = {...t, x: t.x - o.x, y: t.y - o.y}
                }
                return d(n)
            }

            function te(e, t) {
                const o = O(e);
                return !(o === t || !L(o) || j(o)) && ("fixed" === H(o).position || te(o, t))
            }

            function oe(e, t, o) {
                const n = R(t), r = I(t), a = "fixed" === o, i = J(e, !0, a, t);
                let s = {scrollLeft: 0, scrollTop: 0};
                const c = T(0);
                if (n || !n && !a) if (("body" !== B(t) || N(r)) && (s = U(t)), n) {
                    const e = J(t, !0, a, t);
                    c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
                } else r && (c.x = Z(r));
                return {x: i.left + s.scrollLeft - c.x, y: i.top + s.scrollTop - c.y, width: i.width, height: i.height}
            }

            function ne(e, t) {
                return R(e) && "fixed" !== H(e).position ? t ? t(e) : e.offsetParent : null
            }

            function re(e, t) {
                const o = A(e);
                if (!R(e) || Q(e)) return o;
                let n = ne(e, t);
                for (; n && E(n) && "static" === H(n).position;) n = ne(n, t);
                return n && ("html" === B(n) || "body" === B(n) && "static" === H(n).position && !$(n)) ? o : n || function (e) {
                    let t = O(e);
                    for (; R(t) && !j(t);) {
                        if ($(t)) return t;
                        t = O(t)
                    }
                    return null
                }(e) || o
            }

            const ae = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
                    let {elements: t, rect: o, offsetParent: n, strategy: r} = e;
                    const a = "fixed" === r, i = I(n), s = !!t && Q(t.floating);
                    if (n === i || s && a) return o;
                    let c = {scrollLeft: 0, scrollTop: 0}, d = T(1);
                    const l = T(0), p = R(n);
                    if ((p || !p && !a) && (("body" !== B(n) || N(i)) && (c = U(n)), R(n))) {
                        const e = J(n);
                        d = q(n), l.x = e.x + n.clientLeft, l.y = e.y + n.clientTop
                    }
                    return {
                        width: o.width * d.x,
                        height: o.height * d.y,
                        x: o.x * d.x - c.scrollLeft * d.x + l.x,
                        y: o.y * d.y - c.scrollTop * d.y + l.y
                    }
                }, getDocumentElement: I, getClippingRect: function (e) {
                    let {element: t, boundary: o, rootBoundary: n, strategy: r} = e;
                    const a = [..."clippingAncestors" === o ? function (e, t) {
                        const o = t.get(e);
                        if (o) return o;
                        let n = z(e, [], !1).filter((e => L(e) && "body" !== B(e))), r = null;
                        const a = "fixed" === H(e).position;
                        let i = a ? O(e) : e;
                        for (; L(i) && !j(i);) {
                            const t = H(i), o = $(i);
                            o || "fixed" !== t.position || (r = null), (a ? !o && !r : !o && "static" === t.position && r && ["absolute", "fixed"].includes(r.position) || N(i) && !o && te(e, i)) ? n = n.filter((e => e !== i)) : r = t, i = O(i)
                        }
                        return t.set(e, n), n
                    }(t, this._c) : [].concat(o), n], i = a[0], s = a.reduce(((e, o) => {
                        const n = ee(t, o, r);
                        return e.top = k(n.top, e.top), e.right = S(n.right, e.right), e.bottom = S(n.bottom, e.bottom), e.left = k(n.left, e.left), e
                    }), ee(t, i, r));
                    return {width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top}
                }, getOffsetParent: re, getElementRects: async function (e) {
                    const t = this.getOffsetParent || re, o = this.getDimensions;
                    return {
                        reference: oe(e.reference, await t(e.floating), e.strategy),
                        floating: {x: 0, y: 0, ...await o(e.floating)}
                    }
                }, getClientRects: function (e) {
                    return Array.from(e.getClientRects())
                }, getDimensions: function (e) {
                    const {width: t, height: o} = G(e);
                    return {width: t, height: o}
                }, getScale: q, isElement: L, isRTL: function (e) {
                    return "rtl" === H(e).direction
                }
            };

            function ie(e, t, o, n) {
                void 0 === n && (n = {});
                const {
                    ancestorScroll: r = !0,
                    ancestorResize: a = !0,
                    elementResize: i = "function" == typeof ResizeObserver,
                    layoutShift: s = "function" == typeof IntersectionObserver,
                    animationFrame: c = !1
                } = n, d = V(e), l = r || a ? [...d ? z(d) : [], ...z(t)] : [];
                l.forEach((e => {
                    r && e.addEventListener("scroll", o, {passive: !0}), a && e.addEventListener("resize", o)
                }));
                const p = d && s ? function (e, t) {
                    let o, n = null;
                    const r = I(e);

                    function a() {
                        var e;
                        clearTimeout(o), null == (e = n) || e.disconnect(), n = null
                    }

                    return function i(s, c) {
                        void 0 === s && (s = !1), void 0 === c && (c = 1), a();
                        const {left: d, top: l, width: p, height: u} = e.getBoundingClientRect();
                        if (s || t(), !p || !u) return;
                        const m = {
                            rootMargin: -P(l) + "px " + -P(r.clientWidth - (d + p)) + "px " + -P(r.clientHeight - (l + u)) + "px " + -P(d) + "px",
                            threshold: k(0, S(1, c)) || 1
                        };
                        let g = !0;

                        function h(e) {
                            const t = e[0].intersectionRatio;
                            if (t !== c) {
                                if (!g) return i();
                                t ? i(!1, t) : o = setTimeout((() => {
                                    i(!1, 1e-7)
                                }), 100)
                            }
                            g = !1
                        }

                        try {
                            n = new IntersectionObserver(h, {...m, root: r.ownerDocument})
                        } catch (e) {
                            n = new IntersectionObserver(h, m)
                        }
                        n.observe(e)
                    }(!0), a
                }(d, o) : null;
                let u, m = -1, g = null;
                i && (g = new ResizeObserver((e => {
                    let [n] = e;
                    n && n.target === d && g && (g.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame((() => {
                        var e;
                        null == (e = g) || e.observe(t)
                    }))), o()
                })), d && !c && g.observe(d), g.observe(t));
                let h = c ? J(e) : null;
                return c && function t() {
                    const n = J(e);
                    !h || n.x === h.x && n.y === h.y && n.width === h.width && n.height === h.height || o();
                    h = n, u = requestAnimationFrame(t)
                }(), o(), () => {
                    var e;
                    l.forEach((e => {
                        r && e.removeEventListener("scroll", o), a && e.removeEventListener("resize", o)
                    })), null == p || p(), null == (e = g) || e.disconnect(), g = null, c && cancelAnimationFrame(u)
                }
            }

            const se = function (e) {
                return void 0 === e && (e = {}), {
                    name: "shift", options: e, async fn(t) {
                        const {x: o, y: r, placement: i} = t, {
                            mainAxis: s = !0,
                            crossAxis: c = !1,
                            limiter: d = {
                                fn: e => {
                                    let {x: t, y: o} = e;
                                    return {x: t, y: o}
                                }
                            },
                            ...p
                        } = e, u = {x: o, y: r}, g = await l(t, p), h = a(n(i)), f = w(h);
                        let b = u[h], v = u[f];
                        if (s) {
                            const e = "y" === h ? "bottom" : "right";
                            b = m(b + g["y" === h ? "top" : "left"], b, b - g[e])
                        }
                        if (c) {
                            const e = "y" === f ? "bottom" : "right";
                            v = m(v + g["y" === f ? "top" : "left"], v, v - g[e])
                        }
                        const x = d.fn({...t, [h]: b, [f]: v});
                        return {...x, data: {x: x.x - o, y: x.y - r}}
                    }
                }
            }, ce = function (e) {
                return void 0 === e && (e = {}), {
                    name: "flip", options: e, async fn(t) {
                        var o;
                        const {
                            placement: r,
                            middlewareData: a,
                            rects: i,
                            initialPlacement: s,
                            platform: c,
                            elements: d
                        } = t, {
                            mainAxis: p = !0,
                            crossAxis: u = !0,
                            fallbackPlacements: m,
                            fallbackStrategy: g = "bestFit",
                            flipAlignment: b = !0,
                            ...x
                        } = e, y = n(r), _ = m || (y !== s && b ? function (e) {
                            const t = h(e);
                            return [v(e), t, v(t)]
                        }(s) : [h(s)]), w = [s, ..._], S = await l(t, x), k = [];
                        let C = (null == (o = a.flip) ? void 0 : o.overflows) || [];
                        if (p && k.push(S[y]), u) {
                            const {main: e, cross: t} = f(r, i, await (null == c.isRTL ? void 0 : c.isRTL(d.floating)));
                            k.push(S[e], S[t])
                        }
                        if (C = [...C, {placement: r, overflows: k}], !k.every((e => e <= 0))) {
                            var P, T;
                            const e = (null != (P = null == (T = a.flip) ? void 0 : T.index) ? P : 0) + 1, t = w[e];
                            if (t) return {data: {index: e, overflows: C}, reset: {placement: t}};
                            let o = "bottom";
                            switch (g) {
                                case"bestFit": {
                                    var B;
                                    const e = null == (B = C.map((e => [e, e.overflows.filter((e => e > 0)).reduce(((e, t) => e + t), 0)])).sort(((e, t) => e[1] - t[1]))[0]) ? void 0 : B[0].placement;
                                    e && (o = e);
                                    break
                                }
                                case"initialPlacement":
                                    o = s
                            }
                            if (r !== o) return {reset: {placement: o}}
                        }
                        return {}
                    }
                }
            }, de = function (e) {
                return void 0 === e && (e = {}), {
                    name: "size", options: e, async fn(t) {
                        const {placement: o, rects: a, platform: i, elements: s} = t, {
                            apply: c = (() => {
                            }), ...d
                        } = e, p = await l(t, d), m = n(o), g = r(o);
                        let h, f;
                        "top" === m || "bottom" === m ? (h = m, f = g === (await (null == i.isRTL ? void 0 : i.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (f = m, h = "end" === g ? "top" : "bottom");
                        const b = u(p.left, 0), v = u(p.right, 0), x = u(p.top, 0), y = u(p.bottom, 0), _ = {
                            availableHeight: a.floating.height - (["left", "right"].includes(o) ? 2 * (0 !== x || 0 !== y ? x + y : u(p.top, p.bottom)) : p[h]),
                            availableWidth: a.floating.width - (["top", "bottom"].includes(o) ? 2 * (0 !== b || 0 !== v ? b + v : u(p.left, p.right)) : p[f])
                        };
                        await c({...t, ..._});
                        const w = await i.getDimensions(s.floating);
                        return a.floating.width !== w.width || a.floating.height !== w.height ? {reset: {rects: !0}} : {}
                    }
                }
            }, le = function (e) {
                let {strategy: t = "referenceHidden", ...o} = void 0 === e ? {} : e;
                return {
                    name: "hide", async fn(e) {
                        const {rects: n} = e;
                        switch (t) {
                            case"referenceHidden": {
                                const t = y(await l(e, {...o, elementContext: "reference"}), n.reference);
                                return {data: {referenceHiddenOffsets: t, referenceHidden: _(t)}}
                            }
                            case"escaped": {
                                const t = y(await l(e, {...o, altBoundary: !0}), n.floating);
                                return {data: {escapedOffsets: t, escaped: _(t)}}
                            }
                            default:
                                return {}
                        }
                    }
                }
            }, pe = (e, t, o) => {
                const n = new Map, r = {platform: ae, ...o}, a = {...r.platform, _c: n};
                return (async (e, t, o) => {
                    const {placement: n = "bottom", strategy: r = "absolute", middleware: a = [], platform: i} = o,
                        c = a.filter(Boolean), d = await (null == i.isRTL ? void 0 : i.isRTL(t));
                    let l = await i.getElementRects({reference: e, floating: t, strategy: r}), {
                        x: p,
                        y: u
                    } = s(l, n, d), m = n, g = {}, h = 0;
                    for (let o = 0; o < c.length; o++) {
                        const {name: a, fn: f} = c[o], {x: b, y: v, data: x, reset: y} = await f({
                            x: p,
                            y: u,
                            initialPlacement: n,
                            placement: m,
                            strategy: r,
                            middlewareData: g,
                            rects: l,
                            platform: i,
                            elements: {reference: e, floating: t}
                        });
                        p = null != b ? b : p, u = null != v ? v : u, g = {
                            ...g,
                            [a]: {...g[a], ...x}
                        }, y && h <= 50 && (h++, "object" == typeof y && (y.placement && (m = y.placement), y.rects && (l = !0 === y.rects ? await i.getElementRects({
                            reference: e,
                            floating: t,
                            strategy: r
                        }) : y.rects), ({x: p, y: u} = s(l, m, d))), o = -1)
                    }
                    return {x: p, y: u, placement: m, strategy: r, middlewareData: g}
                })(e, t, {...r, platform: a})
            }
        }
    }, s = {};

    function c(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var o = s[e] = {id: e, loaded: !1, exports: {}};
        return i[e].call(o.exports, o, o.exports, c), o.loaded = !0, o.exports
    }

    c.m = i, e = [], c.O = function (t, o, n, r) {
        if (!o) {
            var a = 1 / 0;
            for (l = 0; l < e.length; l++) {
                o = e[l][0], n = e[l][1], r = e[l][2];
                for (var i = !0, s = 0; s < o.length; s++) (!1 & r || a >= r) && Object.keys(c.O).every((function (e) {
                    return c.O[e](o[s])
                })) ? o.splice(s--, 1) : (i = !1, r < a && (a = r));
                if (i) {
                    e.splice(l--, 1);
                    var d = n();
                    void 0 !== d && (t = d)
                }
            }
            return t
        }
        r = r || 0;
        for (var l = e.length; l > 0 && e[l - 1][2] > r; l--) e[l] = e[l - 1];
        e[l] = [o, n, r]
    }, c.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return c.d(t, {a: t}), t
    }, o = Object.getPrototypeOf ? function (e) {
        return Object.getPrototypeOf(e)
    } : function (e) {
        return e.__proto__
    }, c.t = function (e, n) {
        if (1 & n && (e = this(e)), 8 & n) return e;
        if ("object" == typeof e && e) {
            if (4 & n && e.__esModule) return e;
            if (16 & n && "function" == typeof e.then) return e
        }
        var r = Object.create(null);
        c.r(r);
        var a = {};
        t = t || [null, o({}), o([]), o(o)];
        for (var i = 2 & n && e; "object" == typeof i && !~t.indexOf(i); i = o(i)) Object.getOwnPropertyNames(i).forEach((function (t) {
            a[t] = function () {
                return e[t]
            }
        }));
        return a.default = function () {
            return e
        }, c.d(r, a), r
    }, c.d = function (e, t) {
        for (var o in t) c.o(t, o) && !c.o(e, o) && Object.defineProperty(e, o, {enumerable: !0, get: t[o]})
    }, c.f = {}, c.e = function (e) {
        return Promise.all(Object.keys(c.f).reduce((function (t, o) {
            return c.f[o](e, t), t
        }), []))
    }, c.u = function (e) {
        return e + "." + {
            ocvFeedback: "2a930d83a1ebb2ea4b2d",
            clarity: "cbe2f484e5d686f63a69",
            "common-cscore": "ad7a6dce7dbdf996219b",
            "web-components_render-mode-indicator_dist_index_js": "5369122128fd9bafe68b",
            msccCookieBanner: "a86f13f5b2574b3597b7",
            "libs_topics-shared-state_dist_TopicData_connector_js-libs_topics-shared-state_dist_TopicData_-62f9da": "766ed7b6c0c19bb186de",
            topicData: "2b96ade0ff66928c1ebb",
            poweredByData: "474ac615789df36e97b0",
            "category-data-connector": "18c5850b00a8c6e45d09",
            "channel-data-connector": "02a4c4f575b24365379f",
            layoutPreferenceData: "36c8306114b4a8938d66",
            "common-feed-libs": "569816377fd7cf9cbcda",
            "libs_location-service_dist_AutoSuggestService_index_js-libs_location-service_dist_profiles_We-d085cf": "36490bde8dc8dec85933",
            "weather-card-data-connector": "365f71c98d5946039ac2",
            RewardsData: "d04fc8c7d4c8170f30ae",
            "poweredby-legend-wc": "9cf92ca4433c28eb893a",
            RewardsCoachmarkData: "c462c3980af18bc60b9d",
            SignInData: "70016e6eaece05b76578",
            "libs_social-data-service_dist_service_SocialService_js": "12463e7b442613580eb4",
            "social-data-connector": "52eb9de6d35e6607cb6b",
            "super-nav-coach-mark": "8735d7ab2a10c75e8030",
            "admin-portal-data": "16da2d525e2a9bc5adb4",
            "office-shared-data": "2021dd5a5bbcbf199ddd",
            "shell-new-tab-data": "e71392b22b118958bef1",
            "common-others": "d5ad841de853beaad9e8",
            "common-segments": "c2cfa3181306dd51fb17",
            "cs-core-desktop_card-components_dist_card-banner_index_js-cs-core-desktop_card-components_dis-cef191": "888669d9cc0659b01a27",
            "industry-news-card": "f2cede795ac94ef83824",
            "summary-card-wc": "9d47a507e19541e77d56",
            "office-feed": "050faeed9c445ab4f786",
            "dompurify-library": "439652e2348091e52459",
            "microsoft-feed-card": "660a048b3e2a7216e742",
            "libs_experiences-telemetry-data-mapper_dist_content-mappers_ContentCardTelemetryMapping_js-li-91cd1e": "86927f9c69523e50b9cd",
            articleFre: "39981632a63134e0f3c6",
            articleRelatedStories: "a9ec9888a21bf527b07b",
            articleTopComment: "8dbc348ea359dd8c7103",
            "common-windows-widget-shared": "ec517aac8c13f483583e",
            "common-fast-msft-web-components": "c9ba3f6c74d4689889d5",
            "autos-carousel": "fbde02b9d4ae0317d763",
            autosMarketplaceCard: "7834c25b7dee0f4fd216",
            "boost-ad-card": "cd2b4ea80aae8d31af00",
            "background-gallery": "99eb08f48bb8f9b2dd4c",
            bingHealthCard: "24975392c3dba8964a7e",
            "brand-zone": "9aac25d8577f33880818",
            healthFitnessCarousel: "c16e50947036ce1f4c95",
            "card-actions-wc": "481b8b612eb2752f2a47",
            "esports-library": "937ca361907350e59c5b",
            "libs_views-helpers_dist_views-telemetry_ViewsTelemetryLibrary_js-node_modules_video_js_dist_v-172ab8": "c2b68ebd2d0a7dac0ebc",
            "casual-games-card": "6643ac7f11eccc5eb5f2",
            "casual-games-carousel-card": "4e63f0f815eea53d9600",
            "casual-games-feed": "63b3625a3ccbff2a8c2f",
            "channel-list": "e7a9e7213e36a5f5ce73",
            "channel-store": "f9d771c394cc026db8e1",
            "common-infopane-carouselcard": "6399f06fbd2c49f962fe",
            "cold-start-wc": "3e42b10caab472a2a3d2",
            conditionalBannerWC: "6d8019b2ba4ee047b8c5",
            "common-settings-edgenext": "678987fed13b35becc27",
            "community-card": "469d52f2090a517776d3",
            "content-group-card": "3cbc1c17e24ad841159e",
            "nextdoor-card": "5697b0052f9067c5196b",
            "company-news-card": "e363e305aa85bfb4b1af",
            "daily-brief-wc": "c49a15e6c4b9d76c94d7",
            "daily-discovery": "3b60f9adbddaca04f266",
            "xbox-feed-wc": "bb912be122daa59aa085",
            "dense-card": "fbae6a91ba76e9692aa9",
            "dev-tools": "982df1c842595176a469",
            "digest-card": "f4613060eb3f4430f922",
            "edge-shopping": "5219588f718ef6f70a47",
            "esports-card": "f40c722b50571e91dd3b",
            "linked-in-card": "77f680c33286fe5a88ce",
            "esports-streams-card": "5a072b5cf54b6af9970f",
            feedback: "3220005356a33ce0ca94",
            "health-tip-wc": "016aa5853b2923a4424c",
            "following-fre-full-width": "3336f32f223990c5354c",
            "game-card": "52f64a08d7541d537f57",
            "gaming-compete-card": "8fe997b68a50db2d85d0",
            "gaming-discover-strip": "8e88c5beb169bc4be91f",
            "gaming-interest-group-card": "d4ed717853b206a74d44",
            "gaming-match-card": "724087aceea519b11808",
            "gaming-media-carousel": "9496d429fcd70a0a27e7",
            "gaming-personalization-card": "c614f85f1472c130c344",
            "gaming-recentlyplayed-card": "b11d97d30fa074ec09fc",
            "gaming-recommended-card": "876b3698de7af069c9c8",
            "gaming-reddit-card": "14b2ee63a8c9b14bba74",
            "gaming-rewards-card": "c9576859538e08d8a8d1",
            "gaming-stream-card": "50af4cf6ee52a122bb60",
            "gaming-tournament-card": "73f845ae5335a223c622",
            "gaming-upcoming-card": "3c48b4ce18a052c8c921",
            "gaming-video-card": "7c327626f82a658c52cc",
            "general-elections": "04b59ad75ca95d90a8ac",
            "election-card": "8b1a0411a50e5096fd49",
            "grid-view-feed": "6dd7b8c19bba32ddd0ab",
            "horoscope-answer-card-wc": "d015d84604726a860988",
            "image-search-wc": "e7afdf2c65e09db2a53a",
            "interest-fre-card": "6d50f5cfd4a4ac21bb44",
            "libs_location-service_dist_AutoSuggestService_index_js-libs_traffic_dist_index_js": "ee8858a78de7f730e46e",
            "interests-wc": "b5fc276c6bdac44995f6",
            "interest-management-card": "eb51adb4bb772b213eaa",
            "lottery-card": "377dd1261cc982344781",
            "marketplace-card-wc": "bca32a498bf0a5e55341",
            "na-trending": "e1c8353f6c85262a7e58",
            "mobile-app-upsell": "b15413e73bafe92e0855",
            "mobile-channel-slider": "fd870c59868185883eb6",
            "mobile-story-viewer": "1f16ee5aff49482e0e4f",
            "mobile-popup-window": "5e02c5feb3e11a0fb894",
            "libs_data-transformer-shared_dist_index_js-libs_money-info-loader_dist_index_js-libs_money-da-adb667": "72750d6eb2bde56b1daa",
            "money-info": "e09c80b891686e65ec1f",
            "ms-rewards-wc": "9abca88189e342bde963",
            "navigation-page-experience": "4d6923b988b3861ff64a",
            "news-headline-below-searchbox": "78617a15d4b0321beb00",
            "news-segment-carousel": "ae240363469b37045f66",
            "notification-bell-wc": "dd601018956dbb3a4fb7",
            "notification-mini-card": "d94924cb94a3b6edc5b1",
            "nurturing-coach-mark": "e899152e9794a18ce6b5",
            "nurturing-placement-manager": "5ea7db000698f8928d23",
            "office-coachmark": "3c7be453e0c0587248a4",
            "on-this-day-card-wc": "1b6a368b47531cf0015a",
            "on-this-day-card-small": "0d3fdd56aad47c9bec72",
            "overlay-wc": "f8976142414e67a242b4",
            "personalize-nav-button": "668fc6e40abaf4eafc46",
            "pill-fre-overlay": "6b7919c9aa293a27ea1f",
            "polls-card-wc": "8c8687831ece3b77b2a6",
            "prism-sd-card": "09a2e12a60286c6622f8",
            "publisher-carousel": "ebc7bcc3bdb05f0efe86",
            "qna-card": "c755cff3635402ec7e8c",
            "quiz-card": "249c40928fb133403be2",
            "recipes-sd-card": "5a777485f8ac4b127d80",
            "recommended-search-carousel-wc": "6848e989fb05918fc813",
            "recommendedSites-wc": "25d347e3f4f60325e301",
            "recommended-searches-card": "24fadf064139ebb17721",
            "rewards-card-wc": "f4169892920eedb4f64a",
            "rewards-daily-set-card": "7fc38e364372db75bd69",
            "select-carousel": "aef058ab28486a486122",
            "signal-overlay": "eb2af15427d49819336f",
            "shared-links": "8738c111e6348ef9678f",
            "top-sites-bookmarks": "854f99dcb459179a8158",
            "top-sites-subscription": "800a85069caff678a9a7",
            "sharepoint-news-card": "ea044c20865bcff076fd",
            "web-components_shopping-super-carousel_dist_ShoppingProductCard_ShoppingProductCard_js-web-co-a62c5b": "84b0b40ad4627b8cc018",
            "experiences_shopping-entry-base-experience_dist_ShoppingEntryBaseExperience_js-libs_shopping--0e941e": "39e48400d92de901e431",
            "shopping-bwm-carousel": "8cf79cd608520cce9b3f",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-b41b7f": "2e878d20ff401fe93874",
            "shopping-card-wce": "d6133cb16e0f0a500afe",
            "shopping-edge-insights-card": "5c0f8918a1c30b3759e0",
            "social-avatar": "066fefee0c99f2e6d809",
            "social-bar-wc": "e5bc7506362058e58f7b",
            "social-report-menu": "946fb82a7fdf55c11439",
            "profile-promo-card": "d773768c8bc093eded1f",
            "premium-profile-promo-card": "c11d9621736ccaacae02",
            "sports-info": "c37046ce9f5cbe47d340",
            "spotlight-card-wc": "4faff0e138a91389a508",
            "super-nav": "3df436f0c1e3b33e0d9f",
            "tabbed-feed-wc": "c3b5df744bae61f536df",
            "toast-wc": "6cd4b923cfe7c0d8b058",
            "pill-wc": "319e694f4af755a29b48",
            "publisher-subscribe-follow-button": "5bc4c0d9b99fc4c82920",
            "sign-in-control-wc": "ce912a6f76a1497532ac",
            "sign-in-flyout-wc": "94fdaf13dead2c3ba154",
            "sticky-peek": "8a52a328061c5a4af40c",
            "super-coach-mark-wc": "5ad8de935d24e6052658",
            "story-carousel": "01b1e1b3be508d63297d",
            "back-to-top-button": "e191d30bc573402a4134",
            "traffic-card-wc": "bcf6bbb811411baff102",
            "traffic-hero": "fcb7ead1343fdce83da6",
            "libs_core_dist_interaction-tracker_MouseTracker_js-libs_travel_dist_index_js-web-components_s-ef9e2d": "aca6691434bb61c41061",
            "travel-destination": "8de692b5c31037e8c1a1",
            "travel-carousel": "8f55b138608a0dc6fd7d",
            "travel-hotel-carousel": "5bb507c5fbdc1bbf784b",
            "travel-flight-carousel": "ef1c140566130bd3e9c8",
            trendingTopics: "d55b4206f5dc9b51b81f",
            "voice-search-wc": "ea3a5b5780d4dc5d1c07",
            "waffle-wc": "74c10742f08f983c2805",
            "waterfall-view-feed": "fee4705c613eacc2d102",
            "libs_core_dist_interaction-tracker_MouseTracker_js-libs_weather-shared-wc_dist_utilities_entr-2dcd12": "0376dcd9737eac44f88b",
            "weather-card-wc": "e04438636ada807c9cd8",
            "d3-library": "53f8eff212de2219278d",
            "weather-hero-experience": "51b9d211fd70e620a9bc",
            "weather-minimap-wc": "abb93dae9c53d65974ac",
            "weather-video-entry-wc": "e066e7959900dd21aaaa",
            "weather-one-liner": "6f2b1b4bcdbfcd535fe0",
            welcomeGreetingLight: "f65ba8f8730c537c97bd",
            xfeed: "ff6f54386e1f47717e83",
            "prism-carousel-card": "595144cf240b8b9707fb",
            "trending-search-card": "cab3df831bee15fddb2a",
            "real-estate-card": "8a572aa8bf74c9f2fd4e",
            "shopping-events-deal-card": "8e0792704dbcd863a5b5",
            "shopping-sd-card": "40f78557a2b615ba5389",
            superBreakingNews: "b103d390df46602376d8",
            "video-shopping-card": "7b7bcff7e3b75645882b",
            "manga-card": "f94f911a2fccca5111dd",
            "video-shopping-carousel-card": "10e8a971f00d2cbf9862",
            "libs_feed-layout_dist_card-templates_top-stories-card_TopStoriesCardDataMapper_js-libs_feed-l-1afd74": "810481e0a6e51fbf77a4",
            "news-groups-card": "4fa319dde83e80bf8be9",
            "prayer-times-card": "b06e7e427c898fe6a866",
            "scroll-down-button": "7d3c287bfff87e892176",
            "travel-sd-themes-card": "0c86469b6852bc74c5de",
            "travel-sd-destinations-card": "b7f392c8b5e4af105708",
            "travel-sd-hotels-card": "6ba443fe35357e2cb0ec",
            "travel-sd-flights-card": "222e01ae3449095bf205",
            "feed-level-feedback-wc": "06faac03ca9e863fc413",
            "contextual-feedback-wc": "44a88cb20e2cbfb6ef32",
            "hot-list-card": "df9c037ac8dd85879146",
            "channel-filter-card": "72114b0a56e813327097",
            "codex-bing-chat": "d4705abeab944b647de2",
            "bing-intl-upsell": "69c75188aab8895c4041",
            "shopping-grouped-carousel": "043d1f6ebdefc1783015",
            "nas-highlight-v1": "62f24a4a525d395a1376",
            "views-native-mon": "fa54e46e24a74cb67ead",
            EsportsDataService: "562416125a1995ab53a3",
            "money-augment-card": "f37957d868373ad5d469",
            "shopping-vertical-lists-card": "8c0cec4778fc3ce48668",
            "libs_sports-data-service_dist_SportsDataMapper_js": "9a8b5541af59846613b8",
            "sports-augment-card": "84b854240c2da6e1f121",
            "shopping-notification": "ee3fd8838e9012979570",
            "entertainment-premier-card": "e784395af6d0a7a31d8f",
            "donation-npo-card": "10227361aaba1d180c2c",
            "common-auto-suggest": "50d8bc97466e0fb0d4b8",
            "rich-calendar-card": "64a681db2eb4336419f0",
            "shopping-augment-card": "be2f83d89bc64ec412b0",
            "autos-garage-card": "5526478858fc2b1d5406",
            "float-button-group-wc": "1fbacdb76725a2a98312",
            "social-lead-gen-in-article": "d59665370488f80afb9d",
            "watch-videos-vertical-carousel": "7d821410d4bb26f48c88",
            "shared-hero-news-card": "046cd9b7eb9adb7a62e1",
            "learning-nasa-card": "e0eff2044fe68512be41",
            "learning-trivia-card": "4c79daef48fe7693123a",
            "libs_super-feed_dist_feed-manager_FeedManagerWithClientAd_js-node_modules_fluentui_svg-icons_-8f340f": "daa8a944a9436d534138",
            feedDependencies: "814370cbb4b6b44b4411",
            feedDependenciesGaming: "dadc0b2eebe417b5dc11",
            "na-like-button": "b4b5868ffb407376656f",
            "na-call-to-action": "f6a495451617d94a9a33",
            "nas-highlight-v3v4": "5873ec4aa566b5d8efc3",
            "na-decoration-combo": "60bdc370f9b5515345f9",
            nativeadstemplates: "3d1fd5b812e57319e143",
            "node_modules_intersection-observer_intersection-observer_js": "7ed8a4e215d160c64db4",
            "web-components_info-pane_dist_info-pane-panel_index_js-web-components_info-pane_dist_info-pan-71501c": "94e2c4a7ec24c9d53b71",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_feed-layout_dist_Utils_js-libs_river-data-t-f9dc83": "9f0adc3e62dbdda80988",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_feed-layout_dist_Utils_js-libs_river-data-t-0dcd68": "a0235b77bd86649e17bc",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-9d384c": "f372e9a6582b10e4a50b",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_feed-layout_dist_Utils_js-libs_river-data-t-92d2f3": "3835a0be5d77679c1e17",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-d2460f": "8ca5e8dd43499f397758",
            "libs_core_dist_interaction-tracker_MouseTracker_js-web-components_native-ad-logo_dist_templat-f22c49": "1dd00cbf88efe0017773",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-3c2e6b": "5fa93f0c679a2886b652",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-597e56": "92cae889913a4397a922",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-481e71": "8a351405d7f3bb599b50",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-401e79": "7466859770fc65d12843",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-966c12": "c41aa0f0f03182230978",
            "libs_ads-utils_dist_logging_sendAdImageLoadError_js-libs_channel-page-utils_dist_UrlUtilities-15ed8d": "d6c374468f94981d1e6b",
            "libs_ads-utils_dist_logging_sendAdImageLoadError_js-libs_channel-page-utils_dist_UrlUtilities-f3ea1b": "0a3cd2ce25722691bdb8",
            "libs_ads-utils_dist_logging_sendAdImageLoadError_js-libs_channel-page-utils_dist_UrlUtilities-5c04fa": "2d76350c0e28170217d2",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-4ade5d": "f1dc936b0370aa574411",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-25b0dd": "2f8a4c2d8e5d6e643e07",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-f11189": "9c9bfa661c82404a058a",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-fd419c": "7bf2728ad30da1a483f8",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-17dd4b": "5507301cca5f48d07ba8",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-f659a4": "95bb22da9acf6005d585",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-784ba0": "1fb5107f240eb46df97d",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_feed-layout_dist_Utils_js-libs_river-data-t-6ee41c": "12378d4f4d517fcfbdab",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-f89982": "380c51465a12c8dc0c9f",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-b50a1e": "de1a4f68cba4c9c4409d",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_core_dist_interaction-tracker_MouseTracker_-38e633": "bdbaff28c5d6e8e8766a",
            "cs-core-desktop_responsive-card_dist_index_js-libs_feed-layout_dist_Utils_js-libs_views-helpe-3fb136": "96ef975b2a2c68f125de",
            "cs-core-desktop_info-pane_dist_index_js-cs-core-desktop_responsive-card_dist_index_js-libs_co-08bdf1": "3b9b9a4147f1f2420207",
            "libs_core_dist_interaction-tracker_MouseTracker_js-web-components_native-ad-logo_dist_templat-35ddb4": "340d679380066a8a6c9c",
            "libs_productivity-hub-common_dist_index_js": "138e8bee14d4c3e1d108",
            node_modules_sortablejs_modular_sortable_esm_js: "6985524dca6d732452d7",
            scrollPerfMetricTrackers: "9abeb397be7183994289",
            "diagnostic-web-vitals": "c6eb8c640456acb68b9c",
            "weather-card-wc-prong1": "0fe333fa36975255e596",
            storyManager: "dd315fba1ee6c20bdb3d",
            outlookChannelDataProvider: "4665d4d590f404afd75c",
            serviceBasedChannelDataProvider: "05de98bfe6d8dc979b17",
            "web-components_follow-publisher-button_dist_index_js": "bdee2604ba001760eaa1",
            "web-components_share-view_dist_index_js": "c055693ad3cacabe6dd4",
            "libs_video-manager_dist_index_js": "a14e6cdad87d86ae148a",
            "cold-start-gif": "024f5e873ca7854c1bd1",
            MarketMismatchCoachMark: "e6fcf9edbaadfb663ccb",
            "community-active-discussions": "63092f64e83ce8d23265",
            "community-creation-ideas": "464e528bed6e53d1b771",
            "polls-service": "23aa9d27f3430e18ba1c",
            "experiences_content-group-card_dist_carousel-utils_CarouselInit_js-libs_motion-manager_dist_M-bfccf6": "a29f84a3d5ba96c75d27",
            "web-components_super-cards_dist_cards_super-infopane_CardActionTemplates_js": "c3a0a939a4491f36ee8c",
            "web-components_super-cards_dist_cards_super-infopane_infopane-video-card_infopaneVideoCard_js": "f19c89ee784864a15ec4",
            "feeds-notification-toast": "43a7bf1a4b018b84e575",
            "money-info-service": "0983aeeb263c789428e2",
            "money-watchlist-summary": "f7f8cbec6c610012e19d",
            "money-quote-vertical-quote-list": "40aa57917f7df6519df3",
            "money-earnings-quote-list": "3b3b0cdaec75cf0e5743",
            "money-info-spotlight-earnings": "22b9c3d1079f437efdfc",
            "money-info-spotlight-pre-earnings": "7c4ffa4ed880ee551db6",
            "money-info-spotlight-currency": "16e12dd5f0ef2f61bde0",
            "money-info-event-brief": "52114a971c1946c71e11",
            "money-info-price-spotlight": "9ea61e771663b0609ef3",
            "money-info-watchlist-ideas": "baff8bdd1cda2f812148",
            "money-info-market-movers": "125fe3142d17613242b5",
            "money-info-buttons-banner": "290c01b7f93c46c0ad0d",
            "money-info-market-brief": "2d96499e8785eaba7fb7",
            "money-quote-vertical-watchlist": "f10119eb4990effa5a48",
            "oneservice-card-provider": "5d334bdc32b136297bdc",
            "experiences_recipes-sd-card_src_index_ts": "ab7628dd175983826d1e",
            "social-bar-coachmark-manager": "01eb39d6ab415a7d7eca",
            "sports-data-service": "6aa8676f612017525b67",
            "sports-info-span": "b130b8adfe98cebe37aa",
            "sports-cricket": "88d011c6781a414bcbe9",
            "sports-fre": "12d68eea32ca3e8e5cea",
            "sports-match-list": "69eb36b701d4c950d65b",
            "sports-leaderboard": "3437fa810e8e91861809",
            "sports-tennis": "54efa56d3eebd9d6fcef",
            "sports-marchmadness": "90b8a4cf49197823f1b7",
            "sports-spotlight": "92a5d569a3ff51639616",
            "sports-countdown": "40857fbd684c278c99f6",
            "sports-team-exploration": "3a79a872dd39b09625b0",
            "sports-cricket-exploration": "9ca1741f37776c383500",
            "sports-tennis-exploration": "f107ce55c29f8a19ddd2",
            "sports-info-event-brief": "8113e1d2c5b5d139b847",
            "sports-info-spotlight-race": "d15197197f330daed8e5",
            "sports-info-spotlight-tennis": "a33c7749bcca878224e4",
            "sports-info-hide-popup": "24a6ce81bc1718658d8d",
            "sports-info-spotlight-golf": "4dbc079151ce8c3d870d",
            "web-components_traffic-card_dist_index_js": "7d9a8056bd0a2d98414b",
            "web-components_traffic-card-settings_dist_index_js-_8ccd1": "7356754690d327bc6303",
            "web-components_traffic-location-settings_dist_index_js": "53acdb293818ce8ecc94",
            "web-components_fast-msft-web-components_dist_index_js": "952131e1b5f8c7fa6b6f",
            "libs_channel-page-utils_dist_UrlUtilities_js-libs_views-helpers_dist_data-models_video_Previe-486380": "76ed844debcafd27dcc2",
            "libs_river-data-types_dist_service-contracts_OneServiceContentMetadata_js-web-components_nati-5479ca": "d39ceddb804a5ab610ca",
            "web-components_traffic-card-settings_dist_index_js-_8ccd0": "bbc3614b59c593783848",
            "weather-shared-wc-deferred-dev": "4ad89a8cf5daa969359a",
            "weather-shared-wc-deferred-content": "5765667c386a38c71833",
            node_modules_xmlbuilder2_lib_xmlbuilder2_min_js: "365db5621a87ab118310",
            "weather-shared-wc-deferred-trend-chart": "89a2ae283ad1b7281762",
            "weather-card-wc-init-account-type": "8d498866251d5085a4b6",
            "weather-card-wc-deferred": "193dc12b46702d7100de",
            "weather-legacy-card": "6818b3e6387c4f6a58a8",
            "weather-card-backup-mapper": "126afdb6bed58edd4ac2",
            "weather-lazy-utils": "df0512dd5c7daf3d1641",
            "components_weather-popup_dist_index_js": "fb6762b3db23a48df92d",
            "libs_weather-shared-wc_dist_index_js": "d2098aca585ad669016b",
            "web-components_native-ad-video_dist_index_js": "4521d31668971fb93684",
            "node_modules_crypto-js_md5_js": "133d3dd3702f54b3fcda",
            VpReadyHelper: "68e28b11007d071ae68a",
            "libs_video-manager_dist_players_TalkshoplivePlayer_js": "9dd8fd6eb2d5703a5f21",
            "node_modules_skype_skype-webxt-bridge_dist_index_js": "61c1748592d193c7b72c",
            "weather-legacy-card-deferred": "d0503474011587d293e2"
        }[e] + ".js"
    }, c.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), c.hmd = function (e) {
        return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: function () {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, c.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n = {}, r = "@msnews/msnews-experiences:", c.l = function (e, t, o, a) {
        if (n[e]) n[e].push(t); else {
            var i, s;
            if (void 0 !== o) for (var d = document.getElementsByTagName("script"), l = 0; l < d.length; l++) {
                var p = d[l];
                if (p.getAttribute("src") == e || p.getAttribute("data-webpack") == r + o) {
                    i = p;
                    break
                }
            }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc && i.setAttribute("nonce", c.nc), i.setAttribute("data-webpack", r + o), i.src = c.tu(e), 0 !== i.src.indexOf(window.location.origin + "/") && (i.crossOrigin = "anonymous")), n[e] = [t];
            var u = function (t, o) {
                i.onerror = i.onload = null, clearTimeout(m);
                var r = n[e];
                if (delete n[e], i.parentNode && i.parentNode.removeChild(i), r && r.forEach((function (e) {
                    return e(o)
                })), t) return t(o)
            }, m = setTimeout(u.bind(null, void 0, {type: "timeout", target: i}), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), s && document.head.appendChild(i)
        }
    }, c.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, c.tt = function () {
        return void 0 === a && (a = {
            createScriptURL: function (e) {
                return e
            }
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (a = trustedTypes.createPolicy("webpackTrustedTypesPolicy", a))), a
    }, c.tu = function (e) {
        return c.tt().createScriptURL(e)
    }, c.p = "/bundles/v1/edgeChromium/buildNumber/", function () {
        if (void 0 !== c) {
            const t = c.e, o = {};
            var e;
            const n = document.head.getAttribute("data-info");
            c.e = function (r) {
                return t(r).catch((function (t) {
                    const a = o.hasOwnProperty(r) ? o[r] : 2;
                    if (void 0 === e && (e = !!(n && n.indexOf("prg-afdretry-t") > -1)), e && 2 === a && (c.p = c.p.replace("/assets.", "/assets2.")), 1 === a) if (e) {
                        const e = new URL(c.p, window.location.href);
                        c.p = e.href.replace(e.host, window.location.host)
                    } else c.p = c.p.replace("/assets.", "/assets2.");
                    if (a < 1) throw t;
                    return new Promise((function (e) {
                        setTimeout((function () {
                            o[r] = a - 1, e(c.e(r))
                        }), 100)
                    }))
                }))
            }
        }
    }(), function () {
        if (void 0 !== c && void 0 !== c.tu) {
            const e = c.tu;
            c.tu = function (t) {
                return e(function (e) {
                    if ("string" != typeof e || "undefined" == typeof document) return e;
                    const t = document.head.getAttribute("data-info");
                    if (!(t.indexOf("ntp-akh3t") >= 0 || t.indexOf("ntp-akh3c") >= 0)) return e;
                    const o = "akmprotocol=";
                    var n = document.cookie.split("; ").find((e => 0 === e.indexOf(o)));
                    if (n) {
                        const t = n.split("=");
                        if (t[1]) return e + (e.indexOf("?") < 0 ? "?" : "&") + o + t[1]
                    }
                    return e
                }(t))
            }
        }
    }(), function () {
        var e = {experience: 0};
        c.f.j = function (t, o) {
            var n = c.o(e, t) ? e[t] : void 0;
            if (0 !== n) if (n) o.push(n[2]); else {
                var r = new Promise((function (o, r) {
                    n = e[t] = [o, r]
                }));
                o.push(n[2] = r);
                var a = c.p + c.u(t), i = new Error;
                c.l(a, (function (o) {
                    if (c.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                        var r = o && ("load" === o.type ? "missing" : o.type), a = o && o.target && o.target.src;
                        i.message = "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")", i.name = "ChunkLoadError", i.type = r, i.request = a, n[1](i)
                    }
                }), "chunk-" + t, t)
            }
        }, c.O.j = function (t) {
            return 0 === e[t]
        };
        var t = function (t, o) {
            var n, r, a = o[0], i = o[1], s = o[2], d = 0;
            if (a.some((function (t) {
                return 0 !== e[t]
            }))) {
                for (n in i) c.o(i, n) && (c.m[n] = i[n]);
                if (s) var l = s(c)
            }
            for (t && t(o); d < a.length; d++) r = a[d], c.o(e, r) && e[r] && e[r][0](), e[r] = 0;
            return c.O(l)
        }, o = self.webpackChunk_msnews_msnews_experiences = self.webpackChunk_msnews_msnews_experiences || [];
        o.forEach(t.bind(null, 0)), o.push = t.bind(null, o.push.bind(o))
    }(), c.nc = void 0;
    var d = c.O(void 0, ["common", "microsoft", "vendors"], (function () {
        return c(57125)
    }));
    d = c.O(d)
}();