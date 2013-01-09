
// JS Bindings constants
require("jsb.js");

// Resources definitions
require("tests_resources-jsb.js");

// Load main file
require("tests-main.js");

// Load tests files

var tests_files = [
		'ActionManagerTest/ActionManagerTest.js',
		'ActionsTest/ActionsTest.js',
		'ChipmunkTest/ChipmunkTest.js',
		'ClickAndMoveTest/ClickAndMoveTest.js',
		'CocosDenshionTest/CocosDenshionTest.js',
		'CocosNodeTest/CocosNodeTest.js',
		'DrawPrimitivesTest/DrawPrimitivesTest.js',
		'EaseActionsTest/EaseActionsTest.js',
		'EffectsTest/EffectsTest.js',
		'EventTest/EventTest.js',
		'FileUtils/FileUtilsTest.js',
		'FontTest/FontTest.js',
		'IntervalTest/IntervalTest.js',
		'LabelTest/LabelTest.js',
		'LayerTest/LayerTest.js',
		'MenuTest/MenuTest.js',
		'ParallaxTest/ParallaxTest.js',
		'ParticleTest/ParticleTest.js',
		'PerformanceTest/PerformanceTest.js',
		'PerformanceTest/PerformanceNodeChildrenTest.js',
		'PerformanceTest/PerformanceParticleTest.js',
		'PerformanceTest/PerformanceSpriteTest.js',
		'PerformanceTest/PerformanceTextureTest.js',
		'PerformanceTest/PerformanceTouchesTest.js',
		'Presentation/Presentation.js',
		'ProgressActionsTest/ProgressActionsTest.js',
		'RenderTextureTest/RenderTextureTest.js',
		'RotateWorldTest/RotateWorldTest.js',
		'SceneTest/SceneTest.js',
		'SchedulerTest/SchedulerTest.js',
		'SpriteTest/SpriteTest.js',
		'TileMapTest/TileMapTest.js',
		'TransitionsTest/TransitionsTest.js',
		'UnitTest/UnitTest.js',
		'SysTest/SysTest.js'
	];
for( var i=0; i < tests_files.length; i++) {
	var name = "" + tests_files[i];
	cc.log(" Loading: " + name );
	require( name );
}

var scene = cc.Scene.create();
var layer = new TestController();
scene.addChild(layer);
director.runWithScene( scene );
