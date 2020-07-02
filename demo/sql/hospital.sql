SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `door`;
CREATE TABLE `door`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '病房id',
  `roomnum` int(11) NULL DEFAULT NULL COMMENT '病房号',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '病房地址',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `roomnum`(`roomnum`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

DROP TABLE IF EXISTS `keshi`;
CREATE TABLE `keshi`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '科室id',
  `ksnum` int(11) NOT NULL COMMENT '科室编号',
  `telephone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '科室电话',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '科室名称',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '科室地址',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `ksnum`(`ksnum`) USING BTREE,
  UNIQUE INDEX `ksnum_2`(`ksnum`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

DROP TABLE IF EXISTS `doctor`;
CREATE TABLE `doctor`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '医生id',
  `idcard` int(11) NULL DEFAULT NULL COMMENT '工作证号',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `age` int(11) NULL DEFAULT NULL COMMENT '年龄',
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `rank` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '职位',
  `salary` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '薪水',
  `ksnum` int(11) NULL DEFAULT NULL COMMENT '科室编号',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `科室编号`(`ksnum`) USING BTREE,
  UNIQUE INDEX `idcard`(`idcard`) USING BTREE,
  CONSTRAINT `科室编号` FOREIGN KEY (`ksnum`) REFERENCES `keshi` (`ksnum`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

DROP TABLE IF EXISTS `patient`;
CREATE TABLE `patient`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '病人id',
  `record` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '病历号',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '病人姓名',
  `gender` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `age` int(11) NULL DEFAULT NULL COMMENT '年龄',
  `inhos_date` datetime(0) NULL DEFAULT NULL COMMENT '住院时间',
  `outhos_date` datetime(0) NULL DEFAULT NULL COMMENT '出院时间',
  `doctorid` int(11) NULL DEFAULT 1 COMMENT '医生id',
  `doorid` int(11) NULL DEFAULT 1 COMMENT '病房id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `医生id`(`doctorid`) USING BTREE,
  INDEX `病房id`(`doorid`) USING BTREE,
  UNIQUE INDEX `record`(`record`) USING BTREE,
  CONSTRAINT `医生id` FOREIGN KEY (`doctorid`) REFERENCES `doctor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `病房id` FOREIGN KEY (`doorid`) REFERENCES `door` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
