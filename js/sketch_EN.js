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
  canvas.parent("p5-canvas-container-1");
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
  /*
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
    */


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
      d1 = new Dialogue("???", 10, "RS", 2);
      if (1 == 1) {
        D1 = [
          "Hello,friend from nowhere.",
          "I'm talking to you!",
          "I'm RS.",
          "Unfortunately, we're now in the time and space\n which are split from the reality.",
          "Though it's not dangerous,\n there's only endless chaos and is definitely boring.",
          "You hit the point!",
          "Actually, the reason we're trapped here is that\n my past self lost control and destroyed my normal\n existence in reality.",
          "(So it's more kind like a personal issue TT)",
          "Then the way to escape is quite simple! \nWhat we need to do is to go back to\n the past and fix the problem!",
          "But you know, one can't meet their past self. \nSo maybe that's why you're here to save everything.",
          "So...Can you do me a favour, \nfind my past self and handle all her problems?",
          "I knew you're an easy-going person!",
          "Then let's kick of right away!",
          "Oh！",
          "Though it's safe to travle back \nfor this short period of time, if you get hurt, your stability \nat that time would be affected.",
          "When you can no longer stay there, I'll pull you back.\nThen we have to try it all over again.",
          "Okay, good luck! Off you go!",
        ];
      }
      c = new D_size(0, 255, 10);

      //constructor(num,speed,w1, w2, w3)

      w1 = new select(2, " Who are you talking to?", "Hi..?");
      w2 = new select(2, " Then how can we escape?", "……");
      w3 = new select(3, "Sure!", "I don't know...", "No.");
      w4 = new select(2, "Okay, I'll help you.", "No.");


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
            D1[talk] = "Nice to meet youuuu!";
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
            D1[d1.where + 1] = "So..I want to reach out to you for help!";
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
              "Although I can't go myself, I'll try \nmy best to help you from here!";
            talk = -1;
            d1.where += 1;
            frame1 = frameCount;
          } else if (w3.c1 == "yellow" && mouseIsPressed) {
            D1[d1.where + 1] =
              "Icy...Although I can't go myself, I'll try my best \nto help you from here! \nIt's like a fun travel after all, isn't it?";
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
            D1[d1.where + 2] = "Okay, I'll go and find others.";
            D1[d1.where + 3] =
              "But sadly, I can't send you back neither.\nYou're just a shadow split from the reality, the \nreal you is still living in the normal timeline.";
            D1[d1.where + 4] =
              "So the only way left for you is being trapped \nin such chaos forever.";
            D1[d1.where + 5] = "Sadly, it's time to say goodbye.";
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
      d2 = new Dialogue('Little girl', 10, 'Little RS', 2)
      if (1 == 1) {
        D2 = ["Nice to meet you! My name is...", "Oh,", "I'm happy that you've already known my name.", "I'm the childhood memory of RS. \nI can only exist in scenes she remembered in the past.", "For example, this is the grocery store she used to go.\n Now I borrow it to be my home.", "Anyways,", "Welcome to my little store! \nI hope the goods here will fascinate you!", " "]
      }
      d3 = new Dialogue('Little RS', 10, 'Little RS', 1)
      D3 = ["The bottles on the shelf store\n the memories that went wrong. You open \nand check them out.", "This is a paper box forgotten in the corner.", "Lost pencils, lost homework...Those things belongs \nto that forgotten corner.", "That kind of thing seems unstable after all..", "That is the abandoned fridge! \nThere're many fancy stuff inside!", "But the thing there doesn't belongs to me. You need to \npay extra money for the goods there."]
      g1 = new D_size(0, 255, 10)
      g2 = new D_size(0, 255, 10)
      g3 = new D_size(0, 255, 10)

      d4 = new Dialogue('Little RS', 10, 'Little RS', 1)
      D4 = ['These are the beads I an raising.', 'I mean literally, they are \ncollected from everywhere.', 'And this box is there house. It is \nsatisfying to hear them rolling around!', 'Also I once raise a clip, \nbut lost it in the end..']
      g = new D_size(0, 225, 10)
      h = new D_size(0, 255, 10)

      d5 = new Dialogue('Little RS', 10, "Little RS", 1)
      D5 = ["Oh! How's your progress?", "Let me see...", "The memories you've fixed are--", bottles]




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
        text('-INTRODUCE AGAIN-', 822, 554)
        if (mouseX > 731 && mouseX < 914 && mouseY > 584 && mouseY < 612) {
          fill(146, 32, 32, h.currentS)
        } else {
          fill(0, 0, 0, h.currentS)
        }
        if (bottles != 3) {
          text('-PROGRESS-', 830, 603)
        } else {
          text('-NEXT PHASE-', 830, 603)
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
          text('Memory I\nA song after school', 560, 329)
        } else if (subReady == 2) {
          if (got_2 == 0) {
            image(b2_d, 50, 60)
          } else (
            image(b2_a, 50, 60)
          )
          text('Memory II\nflower rings', 560, 329)
        } else if (subReady == 3) {
          if (got_3 == 0) {
            image(b3_d, 50, 60)
          } else (
            image(b3_a, 50, 60)
          )
          text('Memory III\nMaths Homework..', 560, 329)
        } else if (subReady == 4) {
          text('Paper box connecting future\n\n（Lead you directly to the end）', 560, 329)
        } else if (subReady == 5) {
          text('Fridge covered quilt \n\n(CHEAT gate)\n（Not recommended!）', 560, 329)
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
          D5.push('Come on! You can leave after fixed all!')
          ready_b = 1
        } else if (bottles == 3) {
          open = 1
          end = 1
          D5[D5.length - 1] = "..You've already fixed them all. Let's go."
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
              text('Pass the game once to unlock this.', 560, 329)
              if (mouseIsPressed && mouseX > 520 && mouseX < 619 && mouseY > 428 && mouseY < 550) {
                subPhase = 4
              }
            } else {
              fill('black')
              text('The time is interuppted.', 560, 329)
              if (mouseIsPressed && mouseX > 520 && mouseX < 619 && mouseY > 428 && mouseY < 550) {
                subPhase = 0
                phase = 8
              }
            }

          } else if (subPhase == 12) {
            fill('black')
            text("Music books, maths answers..\nYou found so many things.\nNow you won't lose your heart", 560, 329)
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
      d6 = new Dialogue('Little RS', 10, "Kid who lost her music", 3)
      D6 = ["Oh! You've finished it!", "*GOT A Humming song*", "Super! Then I can..", "……", "I can't remeber where I can sing this.", "No. It's meaningless, its \nmeaning is forgotten by time.", "There's nothing left. \nLet's head back."]
      time = 20
      score = 0
      j = new D_size(0, 255, 2)
      k = new D_size(0, 255, 2)
      x_head = 1100
      talk = 0

      w5 = new select(2, "YEAHH", "Let me sing it to you!")
      w6 = new select(2, "？", "What's wrong?")
      w7 = new select(2, "But we can sing it here..", "……")

      l = new D_size(0, 255, 10)
      d7 = new Dialogue('Little RS', 10, 'Little RS', 1)
      D7 = ["I would hum to myself a \nsong on my way home from school.", "But that song is vague in my mind..", "Can you help me to find that song?", "More specifically,", "click on the blue circle and \ntry to gain 11 scores!", "Be careful no to click on elsewhere!", "Okay let's start!"]
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

      d7 = new Dialogue("Little RS", 10, "Kid who disconnect with peers", 4)
      D7 = ["We've collected all!", "Let me make the ring--", "*GOT Flower ring*", "Okay I'll send it to..", "..who?", "They..?", "We haven't connect for a very long time.", "There's no one left. Let's go back."]

      d8 = new Dialogue("Liitle RS", 10, "Little RS", 1)
      D8 = [" ", "I want to prepare my friends some gift!", "Let's collect some \nflowers from the try!", "……", "There's not much flowers.", "Let's try to collect most of them!", "More specifically, collect\n 10 flowers out of 20!", "Then Let's start!"]

      w8 = new select(2, "Your friends?", "I thought that's your friends.")

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

      d9 = new Dialogue("Maths", 10, "Maths", 0)
      D9 = ["6+7=?"]
      d10 = new Dialogue("also Maths", 10, "also Maths", 0)
      D10 = ["1.6x5=?"]
      w9 = new select(2, "13", "14")
      w10 = new select(2, "9", "8")

      d11 = new Dialogue("Little RS", 10, "Kids can't return to classroom.", 3)
      D11 = ["WE DID IT!", "Take my pen and I'll find my teacher!", "*Got Pencil*", "……", "Actually, she doesn't teach me any more.", "Let's head back."]

      d12 = new Dialogue("Liitle RS", 10, "Little RS", 1)
      D12 = ["IT IS", "MATHS TIME.", "Be prepared, it'll be hard.", "We need to go over those obstacles.", "To be more specifically,\n pree W or S to jump \nand gain 1500 scores.", "Be careful cause flying \ntoo high may also be hurt!", "Also, be prepared for \nthe surprise from math.", "Ready? Let's start!"]
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
      d13 = new Dialogue("Little girl", 10, "Little girl", 0)
      D13 = ["......", "Actually, everything you saw was illusion.", "You can come back, but there's \nnothing left but vague memories.", "There's only blank.", "And the fate for me is \nto stay in this vague forever.", "...", "..And I'm so lonely in this\n boring fixed experiences..", "“But the 'present' you can develop \nby learning from new things.", "Which is the ability I can never get.", "I'm so lonely..", "So, last request.", "Can you stay here with me?"]
      w11 = new select(2, "Stay.", "Leave.")

      d14 = new Dialogue("Past wade", 10, "Past wade", 0)
      D14 = ["..That's good. Stay with me forever.", "Trapped and drowned in the past memories.", "Until you lost yourself...", "Join me.", "And be ready to be consumed by the meaninglessness..", "Stay with me", "Forever……"]


      d15 = new Dialogue("Little RS", 10, "Little RS", 0)
      D15 = ["Sorry..I know you have your own future.", "Although it's 'future' to me,\n but it's 'present' for you, isn't it?", "I also want to have my own stories.", "Anywas, I'm the shadow from the past. I'll let you go.", "You can go to the future, \nbut remember: don't forget the past."]
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