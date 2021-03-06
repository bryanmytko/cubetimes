module ModelHelpers
  module ObjectHelpers
    def jnet_object
      <<-eos
        "----- JNetCube Session Statistics for Fri Jan 03 01:31:11 EST 2014 -----

        Cubes Solved: 12
        Total Pops: 0
        Average: 19.20

        Fastest Time: 16.30
        Slowest Time: 22.03
        Standard Deviation: 02.11

        Individual Times:
        1)          17.35          B2 R2 L' B2 U' D2 B' L' U2 D R2 D R B' D' L2 B F D R2 D2 F R' L' F2
        2)          21.71          L' R B R' U' B' R U' B' U' L' D' L2 R' B L2 U2 R2 U2 D L2 B' D' U' R
        3)          18.54          B2 R L' U F D L D2 F U2 R2 F B' L2 B R' D' R2 D2 U2 L B2 L2 B2 U'
        4)          21.87          U' L' R' U F R2 D F L2 B' L U2 F2 L' U' D2 L2 B R' B D R2 F B D'
        5)          19.36          L2 U D2 L' D2 B2 F2 U' L2 F2 R' B2 U R D2 F D R2 B' R D L2 R D' L2
        6)          17.65          U2 D F2 U B2 F2 L2 D' U' R2 B R2 B2 L2 F U2 L2 D2 F' R2 F R2 U2 R' D
        7)          22.03          U2 R' L U' B F L2 U' F B2 D B U2 D2 B U' R L' F2 D' B' R D B' F'
        8)          17.40          B L' R' U2 D F' L2 R2 U' R B2 F2 R2 D' L F2 B2 R B' F U2 L' F2 L2 U2
        9)          21.19          F D' L2 R B2 L' F' B2 R B R U' L F D' U2 R' L' B2 U2 R' U2 L' F2 R'
        10)         16.30          D R B L' F' D R2 L2 D2 B' U2 B' L' U' R U' F2 R L2 F' D B2 R' B' F'
        11)          20.04          D L D2 R2 U' L2 D2 L' U' F' B L R D' F' U D' B' L' U2 F2 D' F2 U2 R'
        12)          16.94          U2 L D' U2 L2 U' D F R2 L F' R2 L' B2 F' R D R' U2 D L D' R' B2 L'"
      eos
    end
  end
end
