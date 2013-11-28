/**
 * Created with JetBrains PhpStorm.
 * User: inwebo
 * Date: 23/11/13
 * Time: 18:50
 * To change this template use File | Settings | File Templates.
 */
test( "hello test", function() {
    ok( 1 == "1", "Passed!" );
});
test("Pas de namespace window.LibreMVC", function(){
    ok( typeof(window.LibreMVC) == 'undefined', 'Passed!' );
});