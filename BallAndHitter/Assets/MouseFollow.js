#pragma strict

function Start () {

}
var smooth = 5.0;
var tiltAngle = 30.0;

function Update () {
    var target=Quaternion.Euler(200,0,200);
    var smooth=3;
    transform.rotation=Quaternion.Slerp(transform.rotation,target,Time.deltaTime*smooth);
}