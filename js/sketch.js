let phase = 0;
let subPhase = 0;
let ready = 0;
let talk;
let branch;
let end = 0;
let endList = [0, 0, 0, 0];
let endName = ["NEVER STARTED", "RETURN HALFWAY", "DROWNED", "ESCAPED"]
let subReady = 0;

let e_x = 0
let e_y = 0
let x_head = 0
let x_bu = 500
let y_f = 0
let speed_y_f = 0
let x_f

let bottles = 0

let start = 0
let keys = []
let score = 0
let time = 20

let got_1 = 0
let got_2 = 0
let got_3 = 0

let b_y = 400;
let b_s = 0;
let b_a = 0.2
let r_s = 5
let r_w = 10;
let r_h = 60;
let r_x = 0 - 10;

let hearts = 3
let ready_b = 0
let cheat = 0
let open = 0



//已经用到n啦

function preload() {
  B_store = loadImage('assets/Store.png')
  Bo1 = loadImage('assets/Bottle 1.png')
  Bo2 = loadImage('assets/Bottle 2.png')
  Bo3 = loadImage('assets/Bottle 3.png')
  Fr = loadImage('assets/fridge.png')
  Pb = loadImage('assets/Paper box.png')
  Home = loadImage('assets/Home.png')
  D_face = loadImage('assets/Default_face.png')
  Eyes = loadImage('assets/Pupils.png')
  desk = loadImage('assets/Desk.png')
  k1 = loadImage('assets/K1.png')
  k2 = loadImage('assets/K2.png')
  k3 = loadImage('assets/K3.png')

  A_D_face = loadImage('assets/1_1.png')

  C_face1 = loadImage('assets/21.png')
  C_face2 = loadImage('assets/22.png')
  C_face3 = loadImage('assets/23.png')

  final = loadImage('assets/F.png')
  drowned = loadImage('assets/d.png')
  te = loadImage('assets/te.png')


  cross = loadImage('assets/cross.png')
  He3 = loadImage('assets/3H.png')
  He2 = loadImage('assets/2H.png')
  He1 = loadImage('assets/1H.png')
  He0 = loadImage('assets/0H.png')
  ch = loadImage('assets/CH.png')

  b1_a = loadImage('assets/M1_A.png')
  b1_d = loadImage('assets/M1_D.png')
  b2_a = loadImage('assets/M2_A.png')
  b2_d = loadImage('assets/M2_D.png')
  b3_a = loadImage('assets/M3_A.png')
  b3_d = loadImage('assets/M3_D.png')

  C = loadSound('assets/C.mp3')
  D = loadSound('assets/D.mp3')
  E = loadSound('assets/E.mp3')
  F = loadSound('assets/F.mp3')
  G = loadSound('assets/G.mp3')
  A = loadSound('assets/A.mp3')
  B = loadSound('assets/B.mp3')
  HC = loadSound('assets/HC.mp3')
}

function setup() {
  let canvas = createCanvas(1100, 700);
  canvas.parent("p5-canvas-container");
  textAlign(CENTER, CENTER);

  for (let i = 0; i < 8; i++) {
    keys[i] = new key_ball(128.5 * (i + 1))
  }

}

function draw() {
  let notes = [C, D, E, F, G, A, B, HC]



  background(220);
  noStroke();
  // Testing the size of the character rect(250,100,600,550)


  //quick shifting for testing I'll delete it when the game's done
  if (keyIsPressed == true) {
    if (key == '1') {
      phase = 1
      subPhase = 2
      let frame
      textSize(30)
    } else if (key == '2') {
      phase = 2
      subPhase = 0
      let frame
      textSize(30)
    } else if (key == '3') {
      phase = 8
      ready = 0
      textSize(30)
      subPhase = 0

    }
  }


  if (phase == 0) {
    if (subPhase == 0) {
      a = new D_size(30, 40, 0.2);
      e = new D_size(0, 255, 10);
      subPhase = 1;
    }
    background("#3d5e38");
    fill("white");
    textSize(100);
    text("Past/Present/Future", 550, 300);
    if (subPhase == 1) {
      if (mouseX > 456 && mouseX < 640 && mouseY > 375 && mouseY < 410) {
        fill("yellow");
        textSize(a.currentS);
        a.bounce();
        text("-Start Game-", 550, 400);
        if (mouseIsPressed == true) {
          subPhase = 2;
          frame = frameCount;
        }
      } else {
        a.currentS = 30;
        fill("white");
        textSize(30);
        text("-Start Game-", 550, 400);
      }
      fill(0, 0, 0, 255 - e.currentS);
      rect(0, 0, width, height);
      e.expand();
    } else if (subPhase == 2) {
      textSize(30);
      if (mouseX > 466 && mouseX < 634 && mouseY > 384 && mouseY < 408) {
        fill("yellow");
        text("NEW GAME", 550, 400);
        if (mouseIsPressed && frameCount > frame + 10) {
          phase = 1;
          frame = frameCount;
          subPhase = 2;
        }
      } else {
        fill("white");
        text("NEW GAME", 550, 400);
      }
      if (mouseX > 444 && mouseX < 657 && mouseY > 435 && mouseY < 461) {
        fill("yellow");
        text("COLLECTIONS", 550, 450);
        if (mouseIsPressed) {
          phase = -10
          subPhase = 0
        }
      } else {
        fill("white");
        text("COLLECTIONS", 550, 450);
      }
      if (mouseX > 511 && mouseX < 594 && mouseY > 485 && mouseY < 511) {
        fill("yellow");
        text("QUIT", 550, 500);
        if (mouseIsPressed == true) {
          subPhase = 1;
        }
      } else {
        fill("white");
        text("QUIT", 550, 500);
      }
    }

    //--------------PHASE I ----------------------------------------------
  } else if (phase == 1) {
    background(0);
    //设置这个阶段变量的地方----------------
    if (subPhase == 2) {
      b = new D_size(0, 225, 10);
      subPhase = 3;
      d1 = new Dialogue("???", 10, "洛沙", 2);
      if (1 == 1) {
        D1 = [
          "你好，不知道哪里来的朋友。",
          "对，就是你！",
          "我是洛沙。",
          "很不幸地告诉你，我们现在正处身于一个\n脱离时间轴的断层时空中。",
          "这里虽然谈不上危险，但如你所见，\n四下只有无尽的黑暗。\n也挺无聊的。",
          "问到点子上了！",
          "其实我们被困在这里的原因，应该是\n过去的我因为某种原因紊乱了，扰动了四维时间轴。",
          "（自己的事还要别人来帮忙真的很抱歉TT）",
          "所以能逃出去的方法很简单！\n只要回到过去并安抚过去的时空就好了！\n等时空稳定了，你自然可以回到属于你的时空中去！",
          "但是你也知道，一个人是\n不能和过去的自我相见的。所以这可能是为什么\n在时空紊乱也把附近的你牵扯进来了。",
          "所以……可以帮我个忙，找到过去的我，\n安抚导致她紊乱的源头，解决这个事态吗？",
          "我第一眼就知道你是个爽快的人！",
          "好，那让我们启程吧！",
          "哦！对了！",
          "虽然回去一趟没有生命危险，但来自过去的一些伤害\n会削弱你在那个时空中的稳定性。",
          "当无法维系你的存在时，我会把你\n拉回来，那个时候只能重新挑战啦……",
          "好了！注意安全！快去吧！",
        ];
      }
      c = new D_size(0, 255, 10);

      //constructor(num,speed,w1, w2, w3)

      w1 = new select(2, " 啊，我吗？", "你好？");
      w2 = new select(2, " 那我们应该怎么逃出去？", "……");
      w3 = new select(3, "好啊！", "（犹豫不决）", "不帮。");
      w4 = new select(2, "也是辛苦你了，那就帮你一把吧", "不帮。");


    } //到这里为止---------------------------
    if (subPhase == 3 || subPhase == 4 || subPhase == 5) {
      if (frameCount > frame + 60) {
        b.expand();
        push()
        tint(b.currentS)
        image(A_D_face, 0, 0)
        pop()
        d1.display();
        if (d1.a <= 225) {
          d1.update();
        }
        fill(0, 0, 0, d1.a);
        text(D1[d1.where], 700, 599);
      }
      if (subPhase == 3 && b.currentS >= 225) {
        subPhase = 4;
        frame1 = frameCount;
      } else {
        let frame1 = frameCount + 1;
      }
      if (subPhase == 4 && frameCount > frame1 + 10) {
        if (
          //这里是对话翻页器我给你磕一个可以不要给我出bug了吗
          (mouseIsPressed == true ||
            (keyIsPressed == true && keyCode == ENTER)) &&
          d1.where < D1.length - 1
        ) {
          if (d1.where == 0) {
            talk = 1;
          } else if (d1.where == 4) {
            talk = 2;
          } else if (d1.where == 10) {
            talk = 3;
          } else if (d1.where == 11 && talk == -1) {
            talk = 4;
          } else if (talk != 4) {
            d1.where += 1;
            frame1 = frameCount;
          }
        } else if (
          (mouseIsPressed == true ||
            (keyIsPressed == true && keyCode == ENTER)) &&
          d1.where == 16
        ) {
          ready = 1;
          d1.vanish();
        }
        if (ready == 1) {
          d1.update();
        }

        //把选择功能移到下面了！
        if (talk == 1) {
          w1.update();
          w1.display();
          if (w1.c1 == "yellow" && mouseIsPressed) {
            D1[talk] = "你好你好，很高兴见到你!";
            talk = 0;
            d1.where += 1;
            frame1 = frameCount;
          } else if (w1.c2 == "yellow" && mouseIsPressed) {
            talk = 0;
            d1.where += 1;
            frame1 = frameCount;
          }
        } else if (talk == 2) {
          w2.update();
          w2.display();
          if (w2.c1 == "yellow" && mouseIsPressed) {
            D1[d1.where + 1] = "嗯……所以我有一事相求！";
            talk = 0;
            d1.where += 1;
            frame1 = frameCount;
          } else if (w2.c2 == "yellow" && mouseIsPressed) {
            talk = 0;
            d1.where += 1;
            frame1 = frameCount;
          }
        } else if (talk == 3) {
          w3.update();
          w3.display();
          if (w3.c3 == "yellow" && mouseIsPressed) {
            talk = 0;
            d1.where += 1;
            frame1 = frameCount;
          } else if (w3.c2 == "yellow" && mouseIsPressed) {
            D1[d1.where + 1] =
              "虽然不能亲身前往！我也会尽最大努力给你帮助的！\n往返的途径我来想办法，我也会给你提供\n道具帮你顺利通关的！";
            talk = -1;
            d1.where += 1;
            frame1 = frameCount;
          } else if (w3.c1 == "yellow" && mouseIsPressed) {
            D1[d1.where + 1] =
              "诶……！拒绝得好干脆TT\n 虽然不能亲身前往！我也会尽最大努力给你帮助的！\n往返的途径我来想办法，我也会给你提供\n道具帮你顺利通关的！";
            talk = -1;
            d1.where += 1;
            frame1 = frameCount;
          }
        } else if (talk == 4) {
          w4.update();
          w4.display();
          if (w4.c1 == "yellow" && mouseIsPressed) {
            end = -1;
            D1[d1.where + 1] = "......";
            D1[d1.where + 2] = "好吧，我去找其他人。";
            D1[d1.where + 3] =
              "但我也没办法把你送回去。\n现在的你只是从时间轴上被剥离出来的一个不稳定的影子，\n正常的你还在时间轴上生活着。";
            D1[d1.where + 4] =
              "无法逃离这个时空回归正常时间轴的你,\n只能被永生永世困在这里,直到消亡了。";
            D1[d1.where + 5] = "很遗憾，再见了。";
            d1.where += 1;
            talk = 0;
            frame1 = frameCount;
          } else if (w4.c2 == "yellow" && mouseIsPressed) {
            talk = 0;
            d1.where += 1;
            frame1 = frameCount;
          }
        }
      }
      if (ready == 1 && d1.a <= 0 && subPhase != 5) {
        frame2 = frameCount;
        subPhase = 5;
      } else if (ready != 1 && subPhase != 5) {
        frame2 = frameCount + 1;
      }

      if (frameCount > frame2 + 30 && subPhase == 5) {
        fill(255, 255, 255, c.currentS);
        rect(0, 0, width, height);
        c.expand();
        if (c.currentS >= 225 && end != -1) {
          phase = 2;
          subPhase = 0;
          ready = 0;
        } else if (c.currentS >= 225 && end == -1) {
          phase = -1;
          subPhase = 0;
          ready = 0;
          e.currentS = 0;
        }
      }
    }
    //-------------------------PHASE II-----------------
    //phase为2 subPhase为0


  } else if (phase == 2) {
    background("#b5c4da");
    image(B_store, 0, 0) //太棒了成功导入图片了现在就是呃呃呃疯狂导入（？
    image(Bo1, 0, 0)
    image(Bo2, 0, 0)
    image(Bo3, 0, 0)
    image(Fr, 0, 0)
    image(Pb, 0, 0)
    image(desk, 0, 0)
    image(D_face, 0, 0)
    image(Home, 0, 0)
    if (subPhase == 0) {
      f = new D_size(0, 255, 10)
      d2 = new Dialogue('小女孩', 10, '小洛沙', 2)
      if (1 == 1) {
        D2 = ['你好！我是……', '诶，', '你已经知道我的名字了吗。那就好。', '这是名为“洛沙”这个个体的童年记忆，我是\n她回忆中小时候的形象，只能存在于过去的场景中.', '比如说，目前我们正在她记忆中的小时候\n的杂货店里，不过现在被我拿来当作\n接待你的会客室了。', '总之——', '欢迎光顾我的小店，架子上摆的东西\n都可以随便看，如果有你喜欢的就再好不过了！', ' ']
      }
      d3 = new Dialogue('小洛沙', 10, '小洛沙', 1)
      D3 = ['架子上是免费的“瓶中记忆”，里面的记忆似乎有些\n躁动不安，说不定可以打开安抚一下它们呢！', '那个是放在角落里很久的盒子，我也忘了里面有什么了，\n你要是好奇可以打开看看。', '不知道丢在哪里的铅笔，不知道夹在哪里的作业，\n刚背下来考试时却忘记的诗句……嗯……', '觉得被遗忘在角落的东西存在都相当不稳定呢。', '那个是冰柜！虽然好久没通电，都\n变成杂物间了。', '在里面找找，说不定能\n发现好用的道具呢！', "总之！你好好探索一下吧！"]
      g1 = new D_size(0, 255, 10)
      g2 = new D_size(0, 255, 10)
      g3 = new D_size(0, 255, 10)

      d4 = new Dialogue('小洛沙', 10, '小洛沙', 1)
      D4 = ['这个是我养的小珠子们，嘿嘿……', '字面意义，就是从各种地方收集来的小珠子。', '这个盒子是它们的小房子，每次拿起来都能听\n到它们滚来滚去的声音，特别有活力！', '其实我还养过夹子，偶尔还会给它喂\n树叶，但是后来丢了……']
      g = new D_size(0, 225, 10)
      h = new D_size(0, 255, 10)

      d5 = new Dialogue('小洛沙', 10, "小洛沙", 1)
      D5 = ["哦！是来告诉我修复进度吗！", "那让我看看……", "你目前已经修复的记忆数量是——", bottles]




      subPhase = 1
    } else if (subPhase == 1 || subPhase == 2) {
      image(Eyes, 0, 0)
      d2.display()
      if (d2.a <= 225) {
        d2.update()
      }
      f.expand()
      fill(0, 0, 0, f.currentS)
      text(D2[d2.where], 700, 599)
    }
    if (f.currentS > 225 && subPhase == 1) {
      subPhase = 2
      frame = frameCount
    }
    if (subPhase == 2 && frameCount > frame + 10) {
      if ((mouseIsPressed == true ||
        (keyIsPressed == true && keyCode == ENTER)) &&
        d2.where < D2.length - 1) {
        d2.where += 1;
        frame = frameCount;
      }
      if (d2.where == D2.length - 1) {
        d2.vanish()
        d2.update()
      }
      if (d2.a <= 0) {
        subPhase = 3
      }
      //进行一个眼睛的移动…… 到时候表情应该也要再加个变量（尖叫
    } else if (subPhase == 3) {
      if (subReady == 0) {
        e_x = lerp(e_x, -7, 0.1)
        e_y = lerp(e_y, -2.5, 0.1)
        image(Eyes, e_x, e_y)
        push()
        tint(255, g1.currentS)
        g1.expand()
        image(k1, 0, 0)
        pop()
      } else if (subReady == 1) {
        e_x = lerp(e_x, -7, 0.1)
        e_y = lerp(e_y, 2.5, 0.1)
        image(Eyes, e_x, e_y)
        push()
        tint(255, g2.currentS)
        g2.expand()
        image(k2, 0, 0)
        pop()
      } else if (subReady == 2) {
        e_x = lerp(e_x, 7, 0.1)
        e_y = lerp(e_y, 2.5, 0.1)
        image(Eyes, e_x, e_y)
        push()
        tint(255, g3.currentS)
        g3.expand()
        image(k3, 0, 0)
        pop()
      } else if (subReady == 3) {
        e_x = lerp(e_x, 0, 0.1)
        e_y = lerp(e_y, 0, 0.1)
        image(Eyes, e_x, e_y)
      }
      d3.update()
      d3.display()
      fill(0, 0, 0, d3.a);
      text(D3[d3.where], 700, 599)
      if (e_x < -6.9 && e_y < -2.49 && ready == 0) {
        frame = frameCount
        ready = 1
      }
      if (ready == 1) {
        //在第二幕intro完之后进行（可以重复的）介绍
        if (frameCount > frame + 10) {
          if ((mouseIsPressed == true ||
            (keyIsPressed == true && keyCode == ENTER)) &&
            d3.where <= D3.length - 1) {
            if (d3.where == 0) {
              subReady = 1
              d3.where += 1
              frame = frameCount
            } else if (d3.where == 3) {
              subReady = 2
              d3.where += 1
              frame = frameCount
            } else if (d3.where == D3.length - 2) {
              subReady = 3
              d3.where += 1
              frame = frameCount
            } else if (d3.where == D3.length - 1) {
              ready = 2
            }
            else {
              d3.where += 1
              frame = frameCount
            }
          }
        }
      }
      if (ready == 2) {
        d3.vanish()
        if (d3.a <= 0) {
          subPhase = 4
          ready = 0
          subready = 0
        }
      }
    }
    else if (subPhase == 4 || subPhase == 5 || subPhase == 6 || subPhase == 10 || subPhase == 11 || subPhase == 12) {
      if (hearts <= 0) {
        phase = -2
        subPhase = 0
      }
      if (subPhase == 4 || subPhase == 5 || subPhase == 11 || subPhase == 12) {
        image(Eyes, constrain(map(mouseX, 0, width, -3.5, 3.5), -5, 5), constrain(map(mouseY, 0, height, -3.5, 3.5), -5, 5))
        fill(255, 255, 255, g.currentS)
        g.expand()
        rect(700, 520, 1100, 1820)
        if (mouseX > 731 && mouseX < 912 && mouseY > 534 && mouseY < 564) {
          fill(146, 32, 32, h.currentS)
        } else {
          fill(0, 0, 0, h.currentS)
        }
        h.expand()
        text('-再介绍一遍-', 822, 554)
        if (mouseX > 731 && mouseX < 914 && mouseY > 584 && mouseY < 612) {
          fill(146, 32, 32, h.currentS)
        } else {
          fill(0, 0, 0, h.currentS)
        }
        if (bottles != 3) {
          text('-通知修复进度-', 830, 603)
        } else {
          text('-进入下一阶段-', 830, 603)
        }
        fill('black')
        push()
        tint(h.currentS)
        if (cheat != 1) {
          if (hearts == 3) {
            image(He3, 90, 80)
          } else if (hearts == 2) {
            image(He2, 90, 80)
          } else if (hearts == 1) {
            image(He1, 90, 80)
          } else (
            image(He0, 90, 80)
          )
        } else {
          image(ch, 90, 80)
        }
        pop()
        //text(hearts, 840, 650)//在这里！！！加血量的那个！！！！！！！
      }
      if (subPhase == 4) {
        subready = 0
        if (mouseIsPressed == true) {
          if (mouseX > 133 && mouseX < 183 && mouseY > 167 && mouseY < 300) {
            subPhase = 5
            subReady = 1 //Bottle 1
          } else if (mouseX > 241 && mouseX < 301 && mouseY > 150 && mouseY < 305) {
            subPhase = 5
            subReady = 2 //Bottle 2
          } else if (mouseX > 358 && mouseX < 414 && mouseY > 221 && mouseY < 305) {
            subPhase = 5
            subReady = 3 //Bottle 3
          } else if (mouseX > 31 && mouseX < 341 && mouseY > 366 && mouseY < 520) {
            subPhase = 5
            subReady = 4 //Paper Box
          } else if (mouseX > 719 && mouseX < 1100 && mouseY > 400 && mouseY < 520) {
            subPhase = 5
            subReady = 5 //Fridge
          } else if (mouseX > 286 && mouseX < 413 && mouseY > 520 && mouseY < 631) {
            frame = frameCount
            subPhase = 6
            subReady = 7//Home
          } else if (mouseX > 731 && mouseX < 912 && mouseY > 534 && mouseY < 564) {
            subPhase = 3
            subReady = 0
            frame = frameCount
            d3.where = 0
            d3.con = 1
          } else if (mouseX > 731 && mouseX < 914 && mouseY > 584 && mouseY < 612) {
            D5[3] = bottles
            subPhase = 10 //这也有点太跳脱了（？
            frame = frameCount
            d5.where = 0
            d5.con = 1
            d5.a = 1
          }
        }
      } else if (subPhase == 5) {
        fill(255, 255, 255, 225)
        rect(310, 212, 500, 350)
        fill('#922020')
        rect(520, 502, 100, 50)
        fill('white')
        text('GO!', 570, 527)
        image(cross, 70, 30)
        fill("black")
        if (mouseX > 770 - 22 && mouseX < 770 + 22 && mouseY > 248 - 22 && mouseY < 248 + 22 && mouseIsPressed) {
          subPhase = 4
        }
        if (subReady == 1) {
          if (got_1 == 0) {
            image(b1_d, 50, 60)
          } else (
            image(b1_a, 50, 60)
          )
          text('回忆一\n放学路上哼的小曲', 560, 329)
        } else if (subReady == 2) {
          if (got_2 == 0) {
            image(b2_d, 50, 60)
          } else (
            image(b2_a, 50, 60)
          )
          text('回忆二\n为朋友准备的花环', 560, 329)
        } else if (subReady == 3) {
          if (got_3 == 0) {
            image(b3_d, 50, 60)
          } else (
            image(b3_a, 50, 60)
          )
          text('回忆三\n写数学作业..', 560, 329)
        } else if (subReady == 4) {
          text('连接时空的盒子\n\n（首次通关后解锁。\n直接通往结局）', 560, 329)
        } else if (subReady == 5) {
          text('盖着棉被的冰柜\n\n(探索后即可作弊)\n（首次游玩不建议尝试）', 560, 329)
        }

        if (mouseIsPressed && mouseX > 520 && mouseX < 619 && mouseY > 428 && mouseY < 550) {
          if (subReady == 1) {
            ready = -1
            phase = 3
            subPhase = 0
            score = 0
          } else if (subReady == 2) {
            phase = 4
            subPhase = 0
            ready = 0
            score = 0
          } else if (subReady == 3) {
            phase = 5
            subPhase = 0
            score = -100
            subReady = 0
          } else if (subReady == 4) {
            subPhase = 11
            frame = frameCount
          } else if (subReady == 5) {
            subPhase = 12
            frame = frameCount
          }
        }

      } else if (subPhase == 6) {
        image(Eyes, 0, 0)
        if (subReady == 7) {
          d4.update()
          d4.display()
          fill(0, 0, 0, d4.a)
          text(D4[d4.where], 700, 599)
          if (frameCount > frame + 10) {
            if ((mouseIsPressed == true ||
              (keyIsPressed == true && keyCode == ENTER)) &&
              d4.where <= D4.length - 1) {
              if (d4.where == D4.length - 1) {
                d4.vanish()
                g.currentS = 0
                h.currentS = 0
              } else {
                d4.where += 1
                frame = frameCount
              }
            }
          }
          if (d4.a < 0) {
            subPhase = 4
            d4.where = 0
            d4.con = 1
            d4.a = 1
          }
        }
      } else if (subPhase == 10) {
        image(Eyes, 0, 0)
        if (bottles != 3 && ready_b == 0) {
          D5.push('再接再厉吧！等修复完你就可以走啦！')
          ready_b = 1
        } else if (bottles == 3) {
          open = 1
          end = 1
          D5[D5.length - 1] = "……你已经收集全了，那我们走吧。"
        }
        d5.display()
        d5.update()
        fill(0, 0, 0, d5.a)
        text(D5[d5.where], 700, 599)
        if (frameCount > frame + 10) {
          if ((mouseIsPressed == true ||
            (keyIsPressed == true && keyCode == ENTER)) &&
            d5.where <= D5.length - 1) {
            if (d5.where == D5.length - 1) {
              if (bottles != 3) {
                d5.vanish()
              } else {
                subPhase = 0
                ready = 0
                start = 0
                subReady = 0
                phase = 8
              }
            } else {
              d5.where += 1
              frame = frameCount
            }
          }
        }
        if (d5.a < 0) {
          subPhase = 4
        }
      } else if (subPhase == 11 || subPhase == 12) {
        fill(255, 255, 255, 225)
        rect(310, 212, 500, 350)
        fill('#922020')
        rect(520, 502, 100, 50)
        fill('white')
        text('OK', 570, 527)
        if (frameCount > frame + 10) {
          if (subPhase == 11) {
            if (open == 0) {
              fill('black')
              text('你太急了。时候尚未到来。', 560, 329)
              if (mouseIsPressed && mouseX > 520 && mouseX < 619 && mouseY > 428 && mouseY < 550) {
                subPhase = 4
              }
            } else {
              fill('black')
              text('时间微妙地紊乱了。\n你感受到其他可能性的\n自己正在与这个时空重叠。', 560, 329)
              if (mouseIsPressed && mouseX > 520 && mouseX < 619 && mouseY > 428 && mouseY < 550) {
                subPhase = 0
                phase = 8
              }
            }

          } else if (subPhase == 12) {
            fill('black')
            text("…音乐书，编制架，数学答案…\n你找到了很多道具\n现在你的血会自动回满。", 560, 329)
            hearts = 3
            cheat = 1
            if (mouseIsPressed && mouseX > 520 && mouseX < 619 && mouseY > 428 && mouseY < 550) {
              subPhase = 4
            }
          }
        }
      }
    }

    //到这里了！！//Phase III Bottle 1----------------------------------------------------
  } else if (phase == 3) {
    background('#c4a0cc')
    if (subPhase == 0) {
      d6 = new Dialogue('小洛沙', 10, "丢失音符的孩子", 3)
      D6 = ["哦！你已经把曲子编好了嘛！", "*获得了 即兴哼出的曲子！*", "太棒了！这样我在放学路上就能...", "……", "…放学路上的情景，我已经记不清楚了。", "歌？都是随口哼的，毫无意义，已经没人记得它们了。", "这里已经什么都不剩了，我们回去吧。"]
      time = 20
      score = 0
      j = new D_size(0, 255, 2)
      k = new D_size(0, 255, 2)
      x_head = 1100
      talk = 0

      w5 = new select(2, "是的！", "我来哼给你听！")
      w6 = new select(2, "？", "怎么了？")
      w7 = new select(2, "但是至少我们找回了这首歌啊…", "……")

      l = new D_size(0, 255, 10)
      d7 = new Dialogue('小洛沙', 10, '小洛沙', 1)
      D7 = ["放学路上我偶尔会给自己哼歌", "但是好像现在有点记不太清了……", "你可以帮我把那首曲子找回来吗？", "具体的方法是，在我脑内有灵感的时候帮我唤醒那个音！", "也就是在规定时间内点击蓝色的圆圈\n弹奏音符，只要达到11分就算过关！", "小心不要超出时间限额或者点到\n圆圈外！否则会扣分哦！", "好了！那我们开始吧！"]
      frame = frameCount
      subPhase = 1
    } else if (subPhase == 1) {
      fill('black')
      text("SCORE:" + score, width / 2, 30)
      text("TIME:" + floor(time), width / 2, 80)
      fill(255, 255, 255, l.currentS)
      l.expand()
      if (start == 0) {
        x_head = lerp(x_head, 0, 0.05)
      } else {
        x_head = lerp(x_head, 1200, 0.05)
      }
      fill('white')
      for (let i = 0; i < 8; i++) {
        keys[i].display()
      }
      push()
      tint(l.currentS)
      image(C_face1, x_head, 0)
      pop()
      d7.display()
      d7.update()
      fill(0, 0, 0, d7.a)
      text(D7[d7.where], 700, 599)
      if (frameCount > frame + 10) {
        if ((mouseIsPressed == true ||
          (keyIsPressed == true && keyCode == ENTER)) &&
          d7.where <= D7.length - 1) {
          if (d7.where == D7.length - 1) {
            d7.vanish()
            start = 1
          } else {
            d7.where += 1
            frame = frameCount
          }
        }
      }





      if (start == 1) {
        time -= 0.02
        if (ready == -1) {
          let r = floor(random(0, 8))
          keys[r].is = 1
          ready = r
        }
        noStroke()
        for (let i = 0; i < 8; i++) {
          keys[i].higher()
          keys[i].display()
          if (keys[i].begin == 1) {
            if (notes[i].isPlaying() == false) {
              notes[i].play()
            } else {
              keys[i].begin = 0
            }
          }
        }
        if (time <= 0 || score < 0) {
          subPhase = -1
          time = 20
          score = 0
          for (let i = 0; i < 8; i++) {
            keys[i].h = 50
            keys[i].is = 0
          }

        } else if (score >= 11) {
          subPhase = 2
        }
      }
    } else if (subPhase == -1) {
      fill(0, 0, 0, j.currentS)
      j.expand()
      rect(0, 0, width, height)
      fill(255, 255, 255, j.currentS)
      text('YOU LOST ONE HEART', width / 2, height / 2 - 50)
      if (j.currentS >= 255) {
        fill(255, 255, 255, k.currentS)
        rect(0, 0, width, height)
        k.expand()
      }
      if (k.currentS >= 255) {
        phase = 2
        subPhase = 4
        ready = 0
        subReady = 0
        hearts -= 1 - cheat
        score = 0
        start = 0
        d7.where = 0
        d7.con = 1
        //似了
      }
    } else if (subPhase == 2) {
      if (start == 1) {
        frame = frameCount
        start = 0
      }
      fill(255, 255, 255)
      x_head = lerp(x_head, 0, 0.05)
      if (d6.where <= 2) {
        image(C_face1, x_head, 0)
      } else {
        image(C_face3, x_head, 0)
      }
      //circle(x_head, 300, 250)
      d6.display()
      d6.update()
      fill(0, 0, 0, d6.a)
      text(D6[d6.where], 700, 599)
      if (frameCount > frame + 10) {  //说话（那种语气
        if ((mouseIsPressed == true ||
          (keyIsPressed == true && keyCode == ENTER)) &&
          d6.where <= D6.length - 1) {
          if (d6.where == D6.length - 1) {
            d6.vanish()
          } else if (d6.where == 1 || d6.where == 2 || d6.where == 5 || d6.where == 6) {
            d6.where += 1
            frame = frameCount
          } else if (d6.where == 0) {
            talk = 1
          } else if (d6.where == 3) {
            talk = 2
          } else if (d6.where == 4) {
            talk = 3
          }
        }
        if (talk == 1) {
          w5.display()
          w5.update()
          if ((w5.c1 == "yellow" || w5.c2 == "yellow") && mouseIsPressed) {
            d6.where += 1
            frame = frameCount
            talk = 0
          }
        } else if (talk == 2) {
          w6.display()
          w6.update()
          if ((w6.c1 == "yellow" || w6.c2 == "yellow") && mouseIsPressed) {
            d6.where += 1
            frame = frameCount
            talk = 0
          }
        } else if (talk == 3) {
          w7.display()
          w7.update()
          if ((w7.c1 == "yellow" || w7.c2 == "yellow") && mouseIsPressed) {
            d6.where += 1
            frame = frameCount
            talk = 0
          }
        }
      } if (d6.a <= 0) {
        fill(255, 255, 255, k.currentS)
        rect(0, 0, width, height)
        k.expand()
      }
      if (k.currentS >= 255) {
        d6.where = 0
        d6.con = 1
        if (got_1 == 0) {
          bottles += 1
          got_1 = 1
        }
        time = 20
        score = 0
        for (let i = 0; i < 8; i++) {
          keys[i].h = 50
          keys[i].is = 0
        }
        phase = 2
        subPhase = 4
        ready = 0
        subReady = 0
        start = 0
      }

    }//phase 4 ----------------------------------------------------------------------
  } else if (phase == 4) {
    background("#9cba93")
    if (subPhase == 0) {
      talk = 0
      x_f = random(0, width)
      m = new D_size(0, 255, 10)
      n = new D_size(0, 255, 2)
      x_head = 1100

      d7 = new Dialogue("小洛沙", 10, "和同伴断联的孩子", 4)
      D7 = ["收集全了！看我三下五除二", "——做好啦！", "*获得了 手编花环！*", "好嘞，那我们现在就去送给…", "…送给谁来着。", "她们……？", "我们已经很久不联系了。", "这里一个人都没有。我们回去吧。"]

      d8 = new Dialogue("小洛沙", 10, "小洛沙", 1)
      D8 = [" ", "诶嘿，今天要找朋友们去玩～\n我想提前给她们准备点小礼物！", "收集点树上的花来做个花环吧ww", "……", "花好像不多诶", "尽量把它们全都采集到吧！", "也就是说，\n通过键盘上的左右键移动篮子去接住掉下来的花，\n花的总数只有20朵，要至少接到10朵哦！", "那让我们开始吧！"]

      w8 = new select(2, "你的朋友？", "不是你的朋友吗？")

      subPhase = 1

    } else if (subPhase == 1) {
      if (start == 0) {
        if (ready == 0) {
          x_head = lerp(x_head, 0, 0.05)
        } else if (ready = 1) {
          x_head = lerp(x_head, 1500, 0.05)
        }
        fill(255, 255, 255, d8.currentS)
        image(C_face1, x_head, 0)
        //circle(x_head, 300, 250)
        d8.display()
        d8.update()
        fill(0, 0, 0, d8.a)
        text(D8[d8.where], 700, 599)
        if (frameCount > frame + 10) {
          if ((mouseIsPressed == true ||
            (keyIsPressed == true && keyCode == ENTER)) &&
            d8.where <= D8.length - 1) {
            if (d8.where == D8.length - 1) {
              d8.vanish()
              ready = 1
            } else {
              d8.where += 1
              frame = frameCount
            }
          }
          if (d8.a <= 0) {
            start = 1
            frame = frameCount
            d8.where = 0
            d8.con = 1
          }
        }
      } else if (start == 1) {
        fill('black')
        text("GOT:" + score, width / 2, 30)
        text("LEFT:" + time, width / 2, 60)
        fill('white')
        rect(x_bu, 450, 100, 30)

        if (keyIsPressed == true && keyCode == LEFT_ARROW) {
          x_bu -= 6
        } else if (keyIsPressed == true && keyCode == RIGHT_ARROW) {
          x_bu += 6
        }
        if (x_bu <= -100) {
          x_bu = 1100 + 100
        } else if (x_bu > 1200) {
          x_bu = -100
        }
        y_f += speed_y_f
        speed_y_f += 0.1
        if (y_f > height) {
          y_f = -10
          speed_y_f = 0
          x_f = random(0, width)
          time -= 1
        } else if (x_bu < x_f && x_bu + 100 > x_f && y_f + 10 >= 460 && y_f <= 485) {
          y_f = -10
          speed_y_f = 0
          x_f = random(0, width)
          score += 1
          time -= 1
        }
        circle(x_f, y_f, 20)

        if (time == 0 && score < 10) {
          subPhase = -1
        } else if (score >= 10) {
          frame = frameCount
          subPhase = 2
        }
      }
    } else if (subPhase == -1) {
      fill(0, 0, 0, m.currentS)
      m.expand()
      rect(0, 0, width, height)
      fill(255, 255, 255, m.currentS)
      text('YOU LOST ONE HEART', width / 2, height / 2 - 50)
      if (m.currentS >= 255) {
        fill(255, 255, 255, n.currentS)
        rect(0, 0, width, height)
        n.expand()
      }
      if (n.currentS >= 255) {
        phase = 2
        subPhase = 4
        ready = 0
        subReady = 0  //似了
        score = 0
        time = 20
        start = 0
        hearts -= 1 - cheat
      }
    } else if (subPhase == 2) {
      if (got_2 == 0) {
        bottles += 1
        got_2 = 1
      }
      fill("white")
      x_head = lerp(x_head, 0, 0.05)
      //circle(x_head, 300, 250)
      if (d7.where <= 3) {
        image(C_face1, x_head, 0)
      } else {
        image(C_face3, x_head, 0)
      }
      d7.display()
      d7.update()
      fill(0, 0, 0, d7.a)
      text(D7[d7.where], 700, 599)
      if (frameCount > frame + 10) {
        if ((mouseIsPressed == true ||
          (keyIsPressed == true && keyCode == ENTER)) &&
          d7.where <= D7.length - 1) {
          if (d7.where == D7.length - 1) {
            d7.vanish()
          } else if (d7.where == 4) {
            talk = 1
          }
          else {
            d7.where += 1
            frame = frameCount
          }
        }
        if (talk == 1) {
          w8.display()
          w8.update()
          if ((w8.c1 == "yellow" || w8.c2 == "yellow") && mouseIsPressed) {
            d7.where += 1
            frame = frameCount
            talk = 0
          }
        }
      }
      if (d7.a <= 0) {
        fill(255, 255, 255, n.currentS)
        n.expand()
        rect(0, 0, width, height)
      }
      if (n.currentS >= 255) {
        phase = 2
        subPhase = 4
        ready = 0
        subReady = 0
        score = 0
        time = 20
        start = 0
      }
    }



    //加油到5了有这份毅力你干什么都会成功的（……--------------------------------------------------
  } else if (phase == 5) {
    background("#e0a487")
    if (subPhase == 0) {
      o = new D_size(0, 255, 10)
      p = new D_size(0, 255, 2)
      q = new D_size(0, 255, 10)
      x_head = 1100

      d9 = new Dialogue("数学题", 10, "数学题", 0)
      D9 = ["6+7=?"]
      d10 = new Dialogue("还是数学题", 10, "还是数学题", 0)
      D10 = ["1.6x5=?"]
      w9 = new select(2, "13", "14")
      w10 = new select(2, "9", "8")

      d11 = new Dialogue("小洛沙", 10, "无法回到教室的孩子", 3)
      D11 = ["我们做到了！！！！我把答案给算出来了！", "快你帮我拿着笔我要去找老师交作业！", "*获得了 用了一半的铅笔*", "……", "我们这届早就毕业了。\nTa早就不教我了。", "我们还是回去吧。"]

      d12 = new Dialogue("小洛沙", 10, "小洛沙", 1)
      D12 = ["要渡劫了！现在是——", "数学作业时间。", "做好心理准备，这关会很难。", "我们要跨越那些作业的大山。", "具体来说，你需要用键盘的w键跳跃，s键俯冲，\n帮助我跳过那些白色的障碍物，达到1500分以上。", "你可以连跳，但是要小心！碰到障碍物\n或者飞得太高都会受到伤害！", "而且我建议你另一只手随时准备好，\n说不定中途会有来自数学题的惊吓。", "准备好了？那我们开始吧！"]
      frame = frameCount
      subPhase = 1
    } else if (subPhase == 1) {
      if (start == 0) {
        x_head = lerp(x_head, 0, 0.05)
        fill(255, 255, 255, q.currentS)
        q.expand()
        push()
        tint(q.currentS)
        image(C_face2, x_head, 0)
        pop()
        //circle(x_head, 300, 250)
        d12.display()
        d12.update()
        fill(0, 0, 0, d12.a)
        text(D12[d12.where], 700, 599)
        if (frameCount > frame + 10) {
          if ((mouseIsPressed == true ||
            (keyIsPressed == true && keyCode == ENTER)) &&
            d12.where <= D12.length - 1) {
            if (d12.where == D12.length - 1) {
              d12.vanish()
            } else {
              d12.where += 1
              frame = frameCount
            }
          }
        }
        if (d12.a <= 0) {
          start = 1
          d12.con = 1
          d12.where = 0
          x_head = 1100
        }
      }
      if (start == 1) {
        fill("black")
        text("SCORE:" + score, width / 2, 30)
        if (keyIsPressed == true && (key == "w" || key == "W")) {
          b_s = 7
        }
        b_y -= b_s
        if (b_y < 400) {
          b_s -= b_a;
        } else if (b_y > 400 || b_y == 400) {
          b_s = 0;
        }
        fill('white')
        rect(0, 400, width, 20)
        if (keyIsPressed == true && (key == "s" || key == "S")) {
          ellipse(74, b_y - 10, 80, 50);
          b_a = 0.6;
          ready = 1;
        } else {
          circle(74, b_y - 35, 70);
          b_a = 0.4;
          ready = 0;
        }
        rect(r_x, 400 - r_h, r_w, r_h);
        r_x -= r_s;
        if (r_x < 0 - r_w) {
          r_x = 1100;
          r_w = random(10, 85);
          r_h = random(100, 200);
          score += 100;
        }
        if (frameCount % 6 == 0) {
          score += 1;
        }
        if (frameCount % 10 == 0) {
          r_s += 0.01;
        }

        if (score >= 500 && score < 1000) {
          d9.display()
          d9.update()
          fill(0, 0, 0, d9.a)
          text(D9[d9.where], 700, 599)
          if (d9.a > 225 && subReady == 0) {
            w9.display()
            w9.update()
          }
          if (mouseIsPressed == true && w9.c2 == "yellow") {
            subReady = 1
          } else if (mouseIsPressed == true && w9.c1 == "yellow") {
            subPhase = -1
          }
          if (subReady == 1) {
            d9.vanish()
          }

        } else if (score >= 1000 && score < 1500) {
          if (subReady == 0) {
            subPhase = -1
          } else {
            d10.display()
            d10.update()
            fill(0, 0, 0, d10.a)
            text(D10[0], 700, 599)
            if (d10.a > 225 && subReady == 1) {
              w10.display()
              w10.update()
            }
            if (mouseIsPressed == true && w10.c1 == "yellow") {
              subReady = 2
            } else if (mouseIsPressed == true && w10.c2 == "yellow") {
              subPhase = -1
            }
            if (subReady == 2) {
              d10.vanish()
            }
          }
        } else if (score >= 1500) {
          if (subReady != 2) {
            subPhase = -1
          } else {
            subPhase = 2
            ready = 0
          }
        }

        if (ready == 0) {
          if (74 + 35 > r_x && 74 - 35 <= r_x + r_w) {
            if (b_y + 35 > 400 - r_h + 30) {
              subPhase = -2
            }
          }
        } else if (ready == 1) {
          if (74 + 40 > r_x && 74 - 40 <= r_x + r_w) {
            if (b_y + 10 > 400 - r_h + 30) {
              subPhase = -2
            }
          }
        }
        if (b_y - 35 <= 0) {
          subPhase = -2
        }
      }
    } else if (subPhase == -2) {  //又似了
      fill(0, 0, 0, o.currentS)
      o.expand()
      rect(0, 0, width, height)
      fill(255, 255, 255, o.currentS)
      text('YOU LOST ONE HEART', width / 2, height / 2 - 50)
      if (o.currentS >= 255) {
        fill(255, 255, 255, p.currentS)
        p.expand()
        rect(0, 0, width, height)
      }
      if (p.currentS >= 255) {
        hearts -= 1 - cheat
        phase = 2
        subPhase = 4
        ready = 0
        start = 0
        b_s = 0
        r_x = 0 - r_w
        r_s = 5
        b_y = 400
        score = -100
      }
    } else if (subPhase == -1) {
      fill(0, 0, 0, o.currentS)
      o.expand()
      rect(0, 0, width, height)
      fill(255, 255, 255, o.currentS)
      text('YOU LOST ONE HEART', width / 2, height / 2 - 50)
      text("...BECAUSE YOU CAN'T DO MATHS", width / 2, height / 2 + 10)
      if (o.currentS >= 255) {
        fill(255, 255, 255, p.currentS)
        p.expand()
        rect(0, 0, width, height)
      }
      if (p.currentS >= 255) {
        hearts -= 1 - cheat
        phase = 2
        subPhase = 4
        ready = 0
        start = 0
        b_s = 0
        r_x = 0 - r_w
        r_s = 5
        b_y = 400
        score = -100
      }
    } else if (subPhase == 2) {
      if (ready = 0) {
        frame = frameCount
        ready = 1
      }
      x_head = lerp(x_head, 0, 0.05)
      fill("white")
      if (d11.where <= 2) {
        image(C_face1, x_head, 0)
      } else {
        image(C_face3, x_head, 0)
      }
      //circle(x_head, 300, 250)
      d11.display()
      d11.update()
      fill(0, 0, 0, d11.a)
      text(D11[d11.where], 700, 599)
      if (frameCount > frame + 10) {
        if ((mouseIsPressed == true ||
          (keyIsPressed == true && keyCode == ENTER)) &&
          d11.where <= D11.length - 1) {
          if (d11.where == D11.length - 1) {
            d11.vanish()
          } else {
            d11.where += 1
            frame = frameCount
          }
        }
      }
      if (d11.a <= 0) {
        fill(255, 255, 255, p.currentS)
        p.expand()
        rect(0, 0, width, height)
      }
      if (p.currentS >= 255) {
        if (got_3 == 0) {
          bottles += 1
          got_3 = 1
        }
        phase = 2
        subPhase = 4
        subReady = 0
        ready = 0
        score = 0
        b_y = 400
        b_s = 0
        r_x = 0 - r_w
        start = 0
      }
    }


  } else if (phase == 8) {
    background("white")
    if (subPhase == 0) {
      s = new D_size(0, 255, 10)
      t = new D_size(0, 255, 10)
      subPhase = 1
      frame = frameCount
      d13 = new Dialogue("小女孩", 10, "小女孩", 0)
      D13 = ["......", "其实刚才的一切都是幻象。毕竟我们在过去。", "你当然可以回来，但已经逝去\n的一切只在你脑中留下了模糊的痕迹。", "真正的过去已经空无一物，也空无一人了。", "而我也不例外。人是不能带着曾经的自己前往未来的。", "过去永远只能立于空荡荡的曾经，定在那里成为标杆，\n我的虚影是你在这空无一人的时空仅剩的唯一的锚。", "……所以我很孤独，这里的一切都如此不切实际，\n我只能用半真半假的记忆做着飘忽不定的梦。", "“现在”的你可以不断学习、体验新事物，\n遭遇新的邂逅，为新的烦恼所苦恼，", "而我只能沉溺在过去，反复体验着相同却局限的事物。", "我太孤独了……", "所以，最后一个请求。", "你，可以留下来陪我吗？"]
      w11 = new select(2, "留下来。", "不留下来。")

      d14 = new Dialogue("过去的牢笼", 10, "过去的牢笼", 0)
      D14 = ["……太好了。那你就留下来吧。\n永远不要回去，陪着我在这里，", "无限、反复地寻找那些早已迷失的记忆，", "直到最后把自我遗忘，沦为\n只属于过去的某个碎片吧。", "...这也是没有办法的，因为过去只有已经发生的固定事件，\n和你这种充满随机数的未来生物是无法长时间相融的。", "如果你想留在这里，只能化作回忆中的\n某个npc，照着安排好的剧本无穷无尽地演绎一个固定的故事……", "那么你就可以成为一粒好看的\n小珠子，加入我刚打扮好的小盒子里了……", "永远，陪伴我吧……"]


      d15 = new Dialogue("小洛沙", 10, "小洛沙", 0)
      D15 = ["嗯……我知道你有属于自己的未来。", "虽然对来自过去的我来说是未来，\n但对于你来说是正在发生的“现在”吧？", "...真羡慕，我为什么不能\n有自己的故事呢？", "不过……反正我是过去之人，没有\n活在当下的人那么强大，这次就放你走吧。", "我很高兴能看到我梦想中的未来正在生机勃勃地流淌\n在你身上。你也要努力奔向未来，不要把来自过去的我忘了哦。"]
    } else if (subPhase == 1) {
      fill(0, 0, 0, s.currentS)
      s.expand()
      image(final, 0, 0)
      d13.display()
      d13.update()
      fill(0, 0, 0, d13.a)
      text(D13[d13.where], 700, 599)
      if (frameCount > frame + 10) {
        if ((mouseIsPressed == true ||
          (keyIsPressed == true && keyCode == ENTER)) &&
          d13.where <= D13.length - 1) {
          if (d13.where == D13.length - 1) {
            d13.vanish()
          } else {
            d13.where += 1
            frame = frameCount
          }
        }
      }
      if (d13.a <= 0) {
        w11.display()
        w11.update()
        if (w11.c2 == "yellow" && mouseIsPressed) {
          d13.where = 0
          d13.con = 1
          subPhase = 2
          frame1 = frameCount
        } else if (w11.c1 == "yellow" && mouseIsPressed) {
          d13.where = 0
          d13.con = 1
          subPhase = 3
          frame1 = frameCount
        }
      }
    } else if (subPhase == 2) {
      fill(255, 255, 255, t.currentS)
      t.expand()

      rect(0, 0, width, height)
      image(drowned, 0, 0)
      d14.display()
      d14.update()
      fill(0, 0, 0, d14.a)
      text(D14[d14.where], 700, 599)
      if (frameCount > frame1 + 10) {
        if ((mouseIsPressed == true ||
          (keyIsPressed == true && keyCode == ENTER)) &&
          d14.where <= D14.length - 1) {
          if (d14.where == D14.length - 1) {
            phase = -3
            subPhase = 0
            d14.where = 0
          } else {
            d14.where += 1
            frame1 = frameCount
          }
        }

      }

    } else if (subPhase == 3) {
      image(te, 0, 0, 1100, 700)
      d15.display()
      d15.update()
      fill(0, 0, 0, d15.a)
      text(D15[d15.where], 700, 599)
      if (frameCount > frame1 + 10) {
        if ((mouseIsPressed == true ||
          (keyIsPressed == true && keyCode == ENTER)) &&
          d15.where <= D15.length - 1) {
          if (d15.where == D15.length - 1) {
            phase = -4
            subPhase = 0
            d15.where = 0
          } else {
            d15.where += 1
            frame1 = frameCount
          }
        }
      }
    }

    //通过负数phase来控制结局---------------------------
    //ENDING I: NEVER STARTED
  }
  else if (phase == -1) {
    endList[0] = 1
    background("black");
    if (subPhase == 0) {
      d = new D_size(0, 255, 10);
      subPhase = 1;
      frame = frameCount;
    } else {
      fill(255, 255, 255, d.currentS);
      d.expand();
      text("NEVER STARTED", 925, 655);
      if (frameCount > frame + 120) {
        phase = 0;
        subphase = 0;
      }
    }
  } else if (phase == -2) {
    endList[1] = 1
    background('black')
    if (subPhase == 0) {
      r = new D_size(0, 255, 10)
      frame = frameCount
      subPhase = 1
    } else {
      fill(255, 255, 255, r.currentS)
      r.expand()
      text('RETURN HALFWAY', 925, 655)
      if (frameCount > frame + 120) {
        phase = 0;
        subphase = 0;
        hearts = 3
        ready = 0
        subReady = 0
      }
    }
  } else if (phase == -3) {
    endList[2] = 1
    background('black')
    if (subPhase == 0) {
      u = new D_size(0, 255, 10)
      subPhase = 1
      frame = frameCount
    } else if (subPhase == 1) {
      fill(0, 0, 0, u.currentS)
      u.expand()
      rect(0, 0, width, height)
      fill(255, 255, 255, u.currentS)
      text('DROWNED', 925, 655)
      if (u.currentS >= 255 && frameCount > frame + 60) {
        subPhase = 3
        frame = frameCount
      }
    } else {
      if (frameCount > frame + 60) {
        phase = 0
        subPhase = 0
      }
    }
  } else if (phase == -4) {
    endList[3] = 1
    background('white')
    if (subPhase == 0) {
      z = new D_size(0, 255, 10)
      subPhase = 1
      frame = frameCount
    } else if (subPhase == 1) {
      background('white')
      fill(0, 0, 0, z.currentS)
      z.expand()
      text('ESCAPED', 925, 655)
      if (z.currentS >= 255 && frameCount > frame + 60) {
        subPhase = 3
        frame = frameCount
      }
    } else {
      if (frameCount > frame + 60) {
        phase = 0
        subPhase = 0
      }

    }
  }
  else if (phase == -10) {
    background("black")
    fill("white")
    for (let iii = 0; iii <= 3; iii++) {
      if (endList[iii] == 1) {
        text(endName[iii], width / 2, 100 + 100 * (iii + 1))
      } else {
        text("-LOCKED-", width / 2, 100 + 100 * (iii + 1))
      }
    }
    if (mouseX > 513 && mouseX < 585 && mouseY > 587 && mouseY < 607) {
      fill('yellow')
      if (mouseIsPressed) {
        phase = 0
      }
    } else {
      fill('white')
    }
    text("QUIT", width / 2, 600)


  }
}

function mousePressed() {
  console.log(mouseX, mouseY);
  if (phase == 3 && ready != -1) {
    keys[ready].check()
    if (keys[ready].c == 1) {
      score += 1
      keys[ready].c = 0
      keys[ready].is = 0
      ready = -1
    } else {
      score -= 5
    }

  }
}

class D_size {
  constructor(minS, maxS, speed) {
    this.speed = speed;
    this.maxS = maxS;
    this.minS = minS;
    this.currentS = minS;
  }
  bounce() {
    if (this.currentS < this.minS || this.currentS >= this.maxS) {
      this.speed *= -1;
    }
    this.currentS += this.speed;
  }
  expand() {
    if (this.currentS <= this.maxS) {
      this.currentS += this.speed;
    }
  }
}

class Dialogue {
  constructor(name, speed, update_name, w2update) {
    this.name = name;
    this.update_name = update_name;
    this.speed = speed;
    this.where = 0;
    this.here = w2update;
    this.a = 0;
    this.con = 1;
  }
  display() {
    fill(255, 255, 255, this.a);
    rect(0, 519, 1100, 300);
    fill(89, 50, 50, this.a);
    triangle(1050, 660, 1066, 660, 1058, 676);
    fill(0, 0, 0, this.a);
    rect(10, 519, 300, 70);
    if (this.where <= this.here) {
      fill(255, 255, 255, this.a);
      text(this.name, 160, 550);
    } else {
      fill(255, 255, 255, this.a);
      text(this.update_name, 160, 550);
    }
  }
  update() {
    if (this.con == 1) {
      if (this.a <= 225) {
        this.a += this.speed;
      }
    } else {
      this.a -= this.speed;
    }
  }
  vanish() {
    this.con = 0;
  }
}

class select {
  constructor(num, w1, w2, w3) {
    this.num = num;
    this.w1 = w1;
    this.w2 = w2;
    this.w3 = w3;
    this.con = 1;
    this.c1 = "white";
    this.c2 = "white";
    this.c3 = "white";
  }
  display() {
    if (this.num == 2) {
      fill(this.c1);
      rect(282, 359, 600, 50);
      fill(this.c2);
      rect(282, 242, 600, 50);
      fill(0, 0, 0);
      text(this.w1, 600, 270);
      text(this.w2, 600, 380);
    } else {
      fill(this.c1);
      rect(282, 359, 600, 50);
      fill(this.c2);
      rect(282, 242, 600, 50);
      fill(this.c3);
      rect(282, 135, 600, 50);
      fill(0, 0, 0);
      text(this.w2, 600, 270);
      text(this.w3, 600, 380);
      text(this.w1, 600, 160);
    }
  }
  update() {
    if (mouseX > 283 && mouseX < 881 && mouseY > 361 && mouseY < 407) {
      this.c1 = "yellow";
    } else {
      this.c1 = "white";
    }
    if (mouseX > 283 && mouseX < 880 && mouseY > 242 && mouseY < 289) {
      this.c2 = "yellow";
    } else {
      this.c2 = "white";
    }
    if (mouseX > 283 && mouseX < 880 && mouseY > 136 && mouseY < 182) {
      this.c3 = "yellow";
    } else {
      this.c3 = "white";
    }
  }
  vanish() {
    this.con = 0;
  }
}

class key_ball {
  constructor(x) {
    this.y = height / 2
    this.x = x
    this.h = 50
    this.begin = 0
    this.is = 0
    this.c = 0
  }
  higher() {
    if (mouseX > this.x - 25 && mouseX < this.x + 25 && mouseY > this.y - this.h && mouseY < this.y + this.h && mouseIsPressed) {
      this.begin = 1
      this.h += this.h / 50
    } else {
      this.begin = 0
    }
    if (this.is == 1) {
      fill('blue')
    } else {
      fill('white')
    }

  }

  check() {
    if (mouseX > this.x - 25 && mouseX < this.x + 25 && mouseY > this.y - this.h && mouseY < this.y + this.h && this.is == 1) {
      this.c = 1
    }
  }
  display() {
    ellipse(this.x, this.y, 50, this.h)
  }
}

/* for quick use

if (mouseX > 456 && mouseX < 640 && mouseY > 375 && mouseY < 410) {
  fill('yellow')
} else {
  fill('white')
}

*/