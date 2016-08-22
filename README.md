# responsive_grid
###简介：
responsive_grid，提供了一套响应式、移动设备优先的流式栅格系统，随着屏幕或视口（viewport）尺寸的增加，系统会自动分为12列。
###基本用法：
```
<div class="container">
    <div class="row">
        <div class="col col-sm-4 col-xs-6">col</div>
        <div class="col col-sm-4 col-xs-2">col</div>
    </div>
</div>
```
###API
- .container:流式布局容器，相当于Bootstrap中的.container-fluid,宽度为父容器的100%
- .row和.col用来表示行和列
- .col-xs-* 用于超小屏幕，小于 768px，一般为手机
- .col-sm-* 用于小屏幕，大于等于 768px，一般为平板
- .col-md-* 用于中等屏幕，大于等于 992px，一般为桌面显示器
- .col-lg-* 用于大屏幕，大于等于1200px,一般为大桌面显示器
- .col-*-offset-* 列偏移，用法如下：
```
<div class="row">
  <div class="col col-md-4">.col-md-4</div>
  <div class="col col-md-4 col-md-offset-4">.col-md-4 .col-md-offset-4</div>
</div>

```
- .col-md-push-* 改变列的位置，使其相对于原来位置向左偏移*个col大小
- .col-md-pull-* 改变列的位置，使其相对于原来位置向右偏移*个col大小

###SASS源码重点介绍
```
//size的大小为xs,sm,md,lg
@mixin make-grid($size){
    @for $i from 1 to $grid-columns{
        .col-#{$size}-#{$i}{
            width: 100%/$grid-columns*$i;
        }
        .col-#{$size}-offset-#{$i}{
            margin-left: 100%/$grid-columns*$i;
        }
        .col-#{$size}-pull-#{$i}{
            right: 100%/$grid-columns*$i;
        }
        .col-#{$size}-push-#{$i}{
            left: 100%/$grid-columns*$i;
        }
    }
}
@include make-grid(xs)              //移动设备优先
@media (min-width: $screen-sm-min) {
    @include make-grid(sm);
    @extend %col-style;
}
@media (min-width: $screen-md-min) {
    @include make-grid(md);
    @extend %col-style;
}
@media (min-width: $screen-lg-min) {
    @include make-grid(lg);
    @extend %col-style;
}
```







