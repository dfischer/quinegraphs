/* 
comments of the mol library. For more mol files see my original library https://github.com/chorasimilarity/chemlambda-gui/tree/gh-pages/dynamic/mol 
author: Marius Buliga http://imar.ro/~mbuliga/index.html
last modified: 07.11.2019
*/




function molComments(molName) {

switch (molName) {
  case "howto":
  var mol = "If you know how to use this page then select one of the graphs from the drop-down menu.<br><br>After you select a graph...<br><br>Click on \"step\" for one random rewrite.<br><br>Click on \"start\" to apply random rewrites as long as there is any possible rewrite left.<br><br>Click on \"stop\" to stop.<br><br>Click on \"reload\" to reload the same graph.<br><br>There is a manual use too:<br><br>Hover with the mouse over nodes to trigger rewrites.<br><br>Click+drag the nodes to arrange the graph.<br><br>Click on the background and drag to translate the graph.<br><br> Mouse wheel to resize the graph.<br><br>Use gravity slider to expand or contract the graph.<br><br> See <a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a> and <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>";
  break;

  case "SKK":
  var mol = "In lambda calculus, define the combinators S and K by: <br><br> S = &lambda;x.&lambda;y.&lambda;z.x z (y z) <br><br> K =  &lambda;x.&lambda;y.x <br> <br> Then SKK reduces to <br><br> I = &lambda;x.x <br><br> Here we see this reduction in chemlambda.";
  break;
  case "omegaSKI":
  var mol = "In lambda calculus, we can use the combinators: <br><br> S = &lambda;x.&lambda;y.&lambda;z.x z (y z) <br><br> K =  &lambda;x.&lambda;y.x<br><br> to express the combinator &Omega; = (&lambda; x.x x) (&lambda; x.x x)  as the result of reduction of (S (SKK) (SKK) (S (SKK) (SKK))) <br><br> In chemlambda this works most of the times (remember that we use the random rewrites algorithm), but not always.";
  break;
  case "rewrite-L-T":
  var mol = "A rewrite L-T";
  break;

  case "L-FO-FOE-conflict":
  var mol = "Conflict in chemlambda: there are two rewrites whose left patterns overlap: L-FO and FO-FOE";
  break;

  case "A-L-FO-FOE-conflict":
  var mol = "Conflict in chemlambda: the left patterns of the rewrites A-L and L-FO overlap. Moreover the left patterns of L-FO and FO-FOE overlap. Therefore there are more than one maximal  collections of non-conflicting matches in this case.";
  break;

  case "alexo_example":
  var mol = "The lambda term  (&lambda;a.aa)(&lambda;x.((&lambda;b.bb)(&lambda;y.yx)))  should reduce to the &Omega; combinator, but instead in chemlambda it eventually produce a FOE node.<br><br> This is a problem which all (known?) purely local graph rewrite  systems applied to lambda calculus have. Here by \"purely local\" I mean by using only local graph rewrites, only the random rewrites algorithm and the transformation of a lambda term into a graph should also be local, in the sense that the graph of the term CD should consist on only a new node A (for application) with inputs connected to outputs of the graphs of C and D, and the graph of the term &lambda;x.C, where x is a free variable of C, should be made of only a new node L (for lambda abstraction) connected to the output of the graph of C and to the edge corresponding to the variable x. <br><br> I saw this lambda term, with a similar behaviour, in <a href=\"https://arxiv.org/pdf/1701.04691.pdf\">[arXiv:1701.04691]</a>, section 4.";
  break;



  case "ishan_example":
  var mol = "In chemlambda, a FO node is used to duplicate (the graph of) the lambda term &lambda;x.((&lambda;.yy)(xx)). It works sometimes and other times it does not. Reload the graph and reduce it again to see this. <br><br> As a test for chemlambda, suggested <a href=\"https://github.com/chorasimilarity/chemlambda-gui/issues/8#issuecomment-504575084\">here</a>. ";
  break;

  case "ishan_example_foe":
  var mol = "In chemlambda, a FOE node is used to duplicate (the graph of) the lambda term &lambda;x.((&lambda;.yy)(xx)). It works sometimes and other times it does not. Reload the graph and reduce it again to see this.<br><br> As a test for chemlambda, suggested <a href=\"https://github.com/chorasimilarity/chemlambda-gui/issues/8#issuecomment-504575084\">here</a>. ";
  break;

  case "ishan_example_2":
  var mol = "In chemlambda, a FO node is used to duplicate (the graph of) the lambda term &lambda;x.(&lambda;f.ff)(&lambda;y.xy). It works sometimes and other times it does not. Reload the graph and reduce it again to see this. <br><br> As a test for chemlambda, suggested <a href=\"https://github.com/chorasimilarity/chemlambda-gui/issues/8#issuecomment-530665120\">here</a>. ";
  break;

  case "ishan_example_2_foe":
  var mol = "In chemlambda, a FO node is used to duplicate (the graph of) the lambda term &lambda;x.(&lambda;f.ff)(&lambda;y.xy). It works sometimes and other times it does not. Reload the graph and reduce it again to see this. <br><br> As a test for chemlambda, suggested <a href=\"https://github.com/chorasimilarity/chemlambda-gui/issues/8#issuecomment-530665120\">here</a>. ";
  break;

  case "ishan_example_2_A":
  var mol = "In chemlambda, we use this reduction to see if there are any problems caused by the incomplete duplication of the term suggested <a href=\"https://github.com/chorasimilarity/chemlambda-gui/issues/8#issuecomment-530665120\">here</a>. Here we duplicate with a FO node the term M = &lambda;x.(&lambda;f.ff)(&lambda;y.xy), then we apply the copies (outputs) to I = &lambda;x.x. Reload the graph and reduce it several times to see what happens.";
  break;

  case "ishan_example_2_pair":
  var mol = "In chemlambda, we use this reduction to see if there are any problems caused by the incomplete duplication of the term suggested <a href=\"https://github.com/chorasimilarity/chemlambda-gui/issues/8#issuecomment-530665120\">here</a>. Here we duplicate with a FOE node the term M = &lambda;x.(&lambda;f.ff)(&lambda;y.xy), then we plug the copies (outputs) a and b to the term<br><br> FIRST (PAIR a b)<br><br> Here FIRST and PAIR are the lambda terms<br><br> FIRST = &lambda;p.(p (&lambda;x.&lambda;y.x)) <br><br> PAIR =  &lambda;x.&lambda;y.&lambda;z. z x y<br><br> Reload the graph and reduce it several times to see if you get the term M reduced.";
  break;

  case "ishan_example_2_pair_fo":
  var mol = "In chemlambda, we use this reduction to see if there are any problems caused by the incomplete duplication of the term suggested <a href=\"https://github.com/chorasimilarity/chemlambda-gui/issues/8#issuecomment-530665120\">here</a>. Here we duplicate with a FO node the term M = &lambda;x.(&lambda;f.ff)(&lambda;y.xy), then we plug the copies (outputs) a and b to the term<br><br> FIRST (PAIR a b)<br><br> Here FIRST and PAIR are the lambda terms<br><br> FIRST = &lambda;p.(p (&lambda;x.&lambda;y.x)) <br><br> PAIR =  &lambda;x.&lambda;y.&lambda;z. z x y<br><br> Reload the graph and reduce it several times to see if you get the term M reduced.";
  break;

  case "first_pair":
  var mol = "In chemlambda, we use this reduction to see if we can graphically reduce the term<br><br> FIRST (PAIR 5 0)<br><br> Here FIRST and PAIR are the lambda terms<br><br> FIRST = &lambda;p.(p (&lambda;x.&lambda;y.x)) <br><br> PAIR =  &lambda;x.&lambda;y.&lambda;z. z x y<br><br>The terms 5 and 0 are Church numbers. Reload the graph and reduce it several times to see if you get the term 5.";
  break;

  case "dodecahedron":
  var mol = "As a graph, a dodecahedron is a <a href=\"https://en.wikipedia.org/wiki/Generalized_Petersen_graph\">generalized Petersen graph</a>. In chemlambda, this is used to construct a 4X multiplication of a dodecahedron graph. See also <a href=\"http://chorasimilarity.github.io/chemlambda-gui/dynamic/dodecahedron.html\">this demo</a> and, for the connections with the chemlambda quines, <a href=\"https://chorasimilarity.wordpress.com/2019/03/02/lambda-calculus-inspires-experiments-with-chemlambda/\">this chorasimilarity post</a>. [add details here]";
  break;



  case "y_comb_id":
  var mol = "The Y combinator<br><br> Y =  &lambda;g.(&lambda;x.g (x x)) (&lambda;x.g (x x))<br><br> applied to I = &lambda;x.x gives the<br><br> &Omega; = (&lambda; x.x x) (&lambda; x.x x)<br><br> combinator in lambda calculus. Here we do this reduction in chemlambda. Reload the graph and reduce it several times to see what happens.";
  break;

  case "16_quine_A_L_FI_FO":
  var mol = "This is a remarkable chemlambda quine.<br><br> It is called the 16 bubble quine because it has...<br><br> 18 nodes when it becomes a quine, but it comes from this 16 nodes graph.<br><br> It is remarkable because the generated 18 nodes graph is not connected: <br><br> it is made by this 16 nodes graph plus a separated pair of nodes.<br><br> At each step (in the greedy algorithm of rewrites) the 16 quine expels a pair of nodes and in the same time the existing pair of nodes disappears via the L-A and then COMB rewrites.";
  break;

  case "20_quine":
  var mol = "This is a chemlambda quine obtained from the graph of PRED N, where PRED is the predecessor term<br><br>PRED = &lambda;n.&lambda;f.&lambda;x.n (&lambda;g.&lambda;h.h (g f)) (&lambda;u.x) (&lambda;u.u) <br><br> and N is a not small Church number. During this reduction I noticed that there is a pattern of periodic graph reductions which seemed to propagate in the bigger graph.<br><br> The 20 quine is a chemlambda quine with 20 nodes which is obtained from that pattern. Similar to the 28_quine, but smaller.";
  break;

  case "A":
  var mol = "Application node";
  break;

  case "L":
  var mol = "Lambda abstraction node";
  break;

  case "28_quine":
  var mol = "This is a chemlambda quine obtained from the graph of PRED N, where PRED is the predecessor term<br><br>PRED = &lambda;n.&lambda;f.&lambda;x.n (&lambda;g.&lambda;h.h (g f)) (&lambda;u.x) (&lambda;u.u) <br><br> and N is a not small Church number. During this reduction I noticed that there is a pattern of periodic graph reductions which seemed to propagate in the bigger graph.<br><br> The 20 quine is a chemlambda quine with 20 nodes which is obtained from that pattern. Similar to the 20_quine but bigger.";
  break;


  case "9_quine":
  var mol = "This is the smallest chemlambda quine, excepting graphs which have termination (T) nodes and rewrites.";
  break;

  case "10_quine_bubbles":
  var mol = "This remarkable chemlambda quine is the 10_quine. <br><br>It has two properties: it can die and it can reproduce.<br><br> Recall that we use the random rewrites algorithm. <br><br>Because chemlambda admits conflicting graph rewrites, it follows that the random evolution of a graph can lead to different outcomes. <br><br>The 10_quine can die, in the sense that it, eventually, reduces to nothing.<br><br> In rare occasions the 10_quine reproduces itself, resulting into two 10_quines. <br><br>Reload the graph and reduce it several times to see what happens.";
  break;

  case "20_20_hybrid":
  var mol = "This is a chemlambda quine obtained by the operation of hybridization from two 20_quines.  [add details here]";
  break;

  case "16_quine_A_L_FI_FO_duplicate":
  var mol = "By adding two nodes to the 16 bubble quine \"16_quine_A_L_FI_FO\", the obtained graph reduces to two copies of the 16 bubble quine.<br><br> This is possible because the 16 bubble quine is a non connected quine which during its evolution eliminates connected sub-graphs.<br><br> For the building and properties of this graph see the chemlambda demo  <a href=\"http://chorasimilarity.github.io/chemlambda-gui/dynamic/mother_daughter.html\">True life</a>. [add details here] [remake demo]";
  break;

  case "random_16_quine_A_L_FI_FO_duplicate":
  var mol = "Each time you click the \"new\" button you get a random permutation of the edges of the graph \"16_quine_A_L_FI_FO_duplicate\". <br><br> In case you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you! ";
  break;

  case "claudia_starmaker":
  var mol = "This graph is made by the hybridization operation applied to 5 copies of the 16 bubble quine \"16_quine_A_L_FI_FO\". <br><br>Because of the remarkable properties of this quine, it can be used to build new graphs, disconnected from the \"factory\" graph. [add details here]";
  break;


  case "ackermann_2_2":
  var mol = "In chemlambda, the graphical reduction of Ackermann(2,2) to the Church number 7.<br><br> The <a href=\"https://en.wikipedia.org/wiki/Ackermann_function\">Ackermann function</a> is recursive but not primitively recursive.<br><br> The graphical reduction  works every time.<br><br> This is therefore a good candidate for the task to make complex computations with chemistry. <br><br>That is why I use this reduction in the article <a href=\"http://chorasimilarity.github.io/chemlambda-gui/dynamic/molecular.html\">Molecular computers</a> (also <a href=\"https://arxiv.org/abs/1811.04960\">arXiv:1811.04960</a>) where such a molecular computer is defined as <br><br>\"one molecule which transforms, by random chemical reactions mediated by a collection of enzymes, into a predictable other molecule, such that the output molecule can be conceived as the result of a computation encoded in the initial molecule\".<br><br> See <a href=\"https://chorasimilarity.github.io/chemlambda-gui/dynamic/cfp.html\">slides</a>. ";
  break;



  case "ackermann_3_2":
  var mol = "In chemlambda, the graphical reduction of Ackermann(3,2) to the Church number 29. The reduction is much longer than the one for Ackermann(2,2).";
  break;



  case "times_only":
  var mol = "In chemlambda, 5 X 5 = 25, by using a custom graph, inspired from lambda calculus. [add details here]";
  break;

  case "times_only_short":
  var mol = "In chemlambda, 5 X 5 = 25, by using the lambda term<br><br> 5 X 5 = (&lambda;m.&lambda;n.&lambda;f.m(nf)) 5 5<br><br> where 5 is a Church number.";
  break;

  case "times_only_long":
  var mol = "In chemlambda, 5 X 5 = 25, by using the lambda term<br><br> 5 X 5 = (&lambda;m.&lambda;n.m (PLUS n) 0) 5 5<br><br> where 5 and 0 are Church numbers, <br><br> PLUS = &lambda;m.&lambda;n.m SUCC n<br><br> is the  addition lambda term (multiplication is repeated addition) and <br><br> SUCC =  &lambda;n.&lambda;f.&lambda;x.f (n f x)<br><br> is the successor term (addition is repeated application of successor).  Reload the graph and reduce it several times to see what happens. ";
  break;



  case "pwheel_8":
  var mol = "A chemlambda quine which is obtained from  the iteration (using a Y combinator graph) of a permutation of 8 elements function [add details here]";
  break;

  case "omega":
  var mol = "In lambda calculus there is only one quine, the <br><br> &Omega; = (&lambda; x.x x) (&lambda; x.x x) <br><br> combinator.<br><br>It gives a <a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a> quine too.";
  break;



case "random_egg_A_L_FI_FO":
  var mol = "Each time you click the \"new\" button you get a random chemlambda graph with 4 nodes, A, L, FI and FO. <br><br>There are 6! = 720 such graphs. Some of them generate chemlambda quines.<br><br> These are named \"spark_*\" where * is the permutation used to build the particular 4 nodes graph.<br><br> In case you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;


case "random_egg_A_L_FI_FOE":
  var mol = "Each time you click the \"new\" button you get a random chemlambda graph with 4 nodes, A, L, FI and FOE.<br><br> There are 6! = 720 such graphs. Some of them generate chemlambda quines.<br><br> These are named \"sparkFOE_*\" where * is the permutation used to build the particular 4 nodes graph. <br><br>In case you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "random_10_quine_bubbles":
  var mol = "Each time you click the \"new\" button you get a random chemlambda graph with 10 nodes, obtained by a permutation of the edges of the 10_nodes quine. <br><br>There are more than 9 billions such graphs.<br><br> Some of them generate chemlambda quines. These are named \"shuffle_*\" where * is the permutation used to build the particular 10 nodes graph.<br><br> In case you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;




  case "shuffle_10_A3E2974C16B85D0":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_A3E2974C16B85D0\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine.<br><br> Reload it in case it dies. <br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_0368BCDE2541A97":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_0368BCDE2541A97\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br><br>Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_04C92C86BE5A317":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_04C92C86BE5A317\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine.<br><br> Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;


  case "shuffle_10_8639A7BC024DE51":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_8639A7BC024DE51\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine.<br><br> Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_6AC0379E12D5B48":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_6AC0379E12D5B48\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br><br>Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_8C72046E53B9DA1":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_8C72046E53B9DA1\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br><br>Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_018C23A7B6E49D5":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_018C23A7B6E49D5\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br><br>Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_5681ECD297AB304":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_5681ECD297AB304\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br><br>Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_035B17C469E82AD":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_035B17C469E82AD\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br><br>Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_3D25C769B1E804A":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_3D25C769B1E804A\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine.<br><br> Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_D35C680B7AE2149":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_D35C680B7AE2149\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br><br>Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_2AC4D156E30789B":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_2AC4D156E30789B\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine.<br><br> Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

// new one
  case "shuffle_10_5A49728D0CB361E":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_5A49728D0CB361E\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br><br>Reload it in case it dies. <br><br>Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_DAB62013EC87459":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_5A49728D0CB361E\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br><br>Reload it in case it dies.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_0A8E7D9132C546B":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_0A8E7D9132C546B\".<br><br> This is an immortal chemlambda quine, the same as the one which is generated from the 4 nodes graph \"spark_245013\".<br><br>  The name means that it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!  ";
  break;

// new one
  case "shuffle_10_51D3E60BA74C928":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  graph \"shuffle_10_51D3E60BA74C928\". That means it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br><br>Not a quine, but it dies, randomly, after it builds trees.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "shuffle_10_D870619BC345AE2":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_D870619BC345AE2\".<br><br> This seems to be an immortal chemlambda quine, despite the fact that it has conflicting rewrite patterns. <br><br>Reload it to see this, it produces different side graphs before it becomes a quine.<br><br>  The name means that it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine. <br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!  ";
  break;

  case "shuffle_10_290C1735B6A4DE8":
  var mol = "This is the chemlambda graph \"shuffle_10_290C1735B6A4DE8\".<br><br> It is very interesting for several reasons. <br><br>First, it may evolve into a quine, which can also be obtained from the 4 nodes graph \"spark_245013\".<br><br> But it can also evolve into other, different quines.<br><br> This is an example of nature vs nurture.<br><br> Second, many times it evolves into a process which is not periodic and it seems to have a wide variety of ways to do this. <br><br>Therefore, this is not a quine. It is even more interesting than one. <br><br> The name means that it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!  ";
  break;

  case "shuffle_10_D984763ABEC5120":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  quine \"shuffle_10_D984763ABEC5120\". <br><br>This is an immortal chemlambda quine. <br><br> The name means that it is obtained from a random permutation \"random_10_quine_bubbles\" of the edges of the 10 nodes quine.<br><br> Recall that you may baptize a quine. Indeed, if you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!  ";
  break;




  case "LA":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  L-A, or beta rewrite.<br><br> It uses a pair of Arrow nodes which are then eliminated by COMB rewrites. <br><br> Compare with the IC GAMMA-GAMMA rewrite, which uses 2 pairs of Arrow nodes, due to the fact that the IC graphs are not oriented.";
  break;


  case "bubble":
  var mol = "A disappearing \"bubble\" made of arrows, via the COMB rewrites";
  break;

  case "AFOE":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  A-FOE rewrite.<br><br> The wiring of the right pattern (i.e. the result of the rewrite) is similar to the one of the GAMMA-DELTA rewrite from <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a> .";
  break;

  case "LFO":
  var mol = "<a href=\"http://imar.ro/~mbuliga/chemlambda-v2.html\">Chemlambda</a>  L-FO rewrite.<br><br> Similar wiring with the right pattern of GAMMA-DELTA, but the FO node disappears and it is replaced by two new nodes FOE ald FI.";
  break;

  case "GAMMAGAMMA":
  var mol = "<a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  GAMMA-GAMMA rewrite, as done here.<br><br> Click the \"step\" button for one random rewrite.<br><br>It uses 2 pairs of Arrow nodes, which are then eliminated via COMB rewrites.<br><br> To see this you may either use the \"start\" button and let the program reduce randomly the graph, or you may hover with the mouse over the nodes to trigger a rewrite. <br><br> You can also left-click and drag the nodes to re-arrange the graph, or you can resize the image by left-click/drag or mouse wheel. I suppose pinch gesture works.<br><br> Reload with \"reload\" button.<br><br> Compare with the chemlambda L-A rewrite which uses only one pair of Arrow nodes, due to the fact that chemlambda graphs are oriented.";
  break;

  case "DELTADELTA":
  var mol = "<a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  DELTA-DELTA rewrite, as done here.<br><br> It uses 2 pairs of Arrow nodes, which are then eliminated via COMB rewrites. <br><br>Compare with the chemlambda L-A rewrite which uses only one pair of Arrow nodes, due to the fact that chemlambda graphs are oriented.";
  break;

  case "GAMMADELTA":
  var mol = "<a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  GAMMA-DELTA rewrite.<br><br> The right pattern has the same wirings as a DIST rewrite in chemlambda.";
  break;

  case "DELTAGAMMA":
  var mol = "<a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  DELTA-GAMMA rewrite.<br><br> Due to the symmetry, this is actually a GAMMA-DELTA rewrite. There is no need to use both.";
  break;

  case "DELTAT":
  var mol = "<a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  DELTA-T rewrite, similar with the IC GAMMA-T rewrite or with the chemlambda A-T rewrite.";
  break;

  case "GAMMAT":
  var mol = "<a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  GAMMA-T rewrite, similar with the IC DELTA-T rewrite or with the chemlambda A-T rewrite.";
  break;

  case "TT":
  var mol = "This T-T rewrite eliminates pairs of termination nodes T.<br><br> Such a configuration is contradictory with the oriented chemlambda graphs, but not with the unoriented IC graphs.<br><br> Even in chemlambda, the use of the T node with one edge, regardless of the edge orientation, may be more useful than the introduction of supplimentary T nodes in the oriented case.";
  break;

  case "Lafont-quine":
  var mol = "A graph quine appears in the <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a> article, at page 9, Figure 3.<br><br> Lafont shows this 4 nodes graph.<br><br> The caption of the figure is \"a nonterminating computation\".<br><br> This is actually an Interaction Combinators quine!<br><br> It is made of 4 nodes, two of which are termination nodes. <br><br>There are other examples of IC quines which do not contain termination nodes.";
  break;

  case "random_egg_G_G_D_D":
    var mol = "Each time you click the \"new\" button you get a random IC graph with 4 nodes, two GAMMA and two DELTA. <br><br>Some of them generate IC quines. <br><br>These are named \"4_IC_*\" where * is the permutation used to build the particular 4 nodes graph. <br><br>The notation is however not unique, for example \"4_IC_5AB718246309\" is the same graph as \"4_IC_2A3906847B15\". <br><br>This is because we have two pairs of identical nodes. <br><br> Anyway, in case you discover a graph which you think is a IC quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
    break;

  case "4_IC_6B784A053912":
  var mol = "IC quine \"4_IC_6B784A053912\".<br><br> It is immortal, like all IC quines, because in <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  there are no conflicting rewrites.<br><br> In case you discover a graph which you think is a IC quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";

  case "4_IC_84B7362190A5":
  var mol = "IC quine \"4_IC_84B7362190A5\".<br><br> It is immortal, like all IC quines, because in <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  there are no conflicting rewrites.<br><br> In case you discover a graph which you think is a IC quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "4_IC_60852B93A714":
  var mol = "IC quine \"4_IC_60852B93A714\".<br><br> It is immortal, like all IC quines, because in <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  there are no conflicting rewrites.<br><br> In case you discover a graph which you think is a IC quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "4_IC_5AB718246309":
  var mol = "IC quine \"4_IC_5AB718246309\".<br><br> It is immortal, like all IC quines, because in <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  there are no conflicting rewrites.<br><br> It is the same graph as \"4_IC_2A3906847B15\".<br><br> In case you discover a graph which you think is a IC quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "4_IC_2A3906847B15":
  var mol = "IC quine \"4_IC_2A3906847B15\".<br><br> It is immortal, like all IC quines, because in <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  there are no conflicting rewrites.<br><br> It is the same graph as \"4_IC_5AB718246309\".<br><br> In case you discover a graph which you think is a IC quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "4_IC_820963B71A54":
  var mol = "IC quine \"4_IC_820963B71A54\". <br><br>It is immortal, like all IC quines, because in <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  there are no conflicting rewrites.<br><br> In case you discover a graph which you think is a IC quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "4_IC_45182379AB06":
  var mol = "IC quine \"4_IC_45182379AB06\". <br><br>It is immortal, like all IC quines, because in <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  there are no conflicting rewrites.<br><br> In case you discover a graph which you think is a IC quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "4_IC_63407B5A9812":
  var mol = "IC quine \"4_IC_63407B5A9812\". <br><br>It is immortal, like all IC quines, because in <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  there are no conflicting rewrites.<br><br> In case you discover a graph which you think is a IC quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  case "4_IC_41580936B2A7":
  var mol = "4_IC_41580936B2A7\". <br><br>It is immortal, like all IC quines, because in <a href=\"https://pdfs.semanticscholar.org/6cfe/09aa6e5da6ce98077b7a048cb1badd78cc76.pdf\">Interaction Combinators</a>  there are no conflicting rewrites.<br><br> In case you discover a graph which you think is a IC quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;


  case "spark_243501":
    var mol = "One of the most symmetric small chemlambda quines.<br><br>The name means that it is generated a random chemlambda graph with 4 nodes, A, L, FI and FO. <br><br>There are 6! = 720 such graphs. Some of them generate chemlambda quines.<br><br> These are named \"spark_*\" where * is the permutation used to build the particular 4 nodes graph." 
//<br><br> In case you discover a graph which you think is a quine, please copy-paste the CODE and send me a mail at the address which is on top of <a href=\"http://imar.ro/~mbuliga/\">my homepage</a>.  <br><br>The quine, if is a new one, will be named by you!";
  break;

  default:
  var mol = "";
  break;
}
return mol;
}






