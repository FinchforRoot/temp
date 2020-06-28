/*
 Navicat Premium Data Transfer

 Source Server         : local
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : hospital

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 28/06/2020 16:48:26
*/
CREATE DATABASE `hospital` CHARACTER SET utf8 COLLATE utf8_general_ci;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for doctor
-- ----------------------------
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
  CONSTRAINT `科室编号` FOREIGN KEY (`ksnum`) REFERENCES `keshi` (`ksnum`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor
-- ----------------------------
INSERT INTO `doctor` VALUES (1, 9900, '小李', 50, '男', '主任', '30000', 1);
INSERT INTO `doctor` VALUES (2, 9901, '小刘', 48, '女', '主任', '28888', 2);
INSERT INTO `doctor` VALUES (3, 9902, '小王', 55, '女', '主任', '36666', 3);
INSERT INTO `doctor` VALUES (4, 9903, '小青', 38, '女', '主任', '50000', 4);
INSERT INTO `doctor` VALUES (5, 9904, '小陈', 44, '男', '主任', '10000', 5);
INSERT INTO `doctor` VALUES (6, 9905, '小哀', 51, '女', '主任', '17717', 6);
INSERT INTO `doctor` VALUES (7, 9906, '小赵', 33, '男', '主任', '25555', 7);
INSERT INTO `doctor` VALUES (8, 9907, '小黄', 39, '女', '主任', '33333', 8);
INSERT INTO `doctor` VALUES (9, 9908, '小边', 43, '男', '主任', '17657', 9);
INSERT INTO `doctor` VALUES (10, 9909, '小于', 52, '男', '主任', '29830', 10);
INSERT INTO `doctor` VALUES (11, 10100, 'A', 46, '男', '助理', '5000', 1);
INSERT INTO `doctor` VALUES (12, 10101, 'B', 46, '女', '助理', '5000', 2);
INSERT INTO `doctor` VALUES (13, 10102, 'C', 46, '男', '助理', '5000', 3);
INSERT INTO `doctor` VALUES (14, 10103, 'D', 46, '女', '助理', '5000', 4);
INSERT INTO `doctor` VALUES (15, 10104, 'E', 46, '男', '助理', '5000', 5);
INSERT INTO `doctor` VALUES (16, 10105, 'F', 46, '女', '助理', '5000', 6);
INSERT INTO `doctor` VALUES (17, 10106, 'G', 46, '男', '助理', '5000', 7);
INSERT INTO `doctor` VALUES (18, 10107, 'H', 46, '女', '助理', '5000', 8);
INSERT INTO `doctor` VALUES (19, 10108, 'I', 46, '男', '助理', '5000', 9);
INSERT INTO `doctor` VALUES (20, 10109, 'G', 46, '女', '助理', '5000', 10);

-- ----------------------------
-- Table structure for door
-- ----------------------------
DROP TABLE IF EXISTS `door`;
CREATE TABLE `door`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '病房id',
  `roomnum` int(11) NULL DEFAULT NULL COMMENT '病房号',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '病房地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of door
-- ----------------------------
INSERT INTO `door` VALUES (1, 1000, '某某1号楼一层1000');
INSERT INTO `door` VALUES (2, 1001, '某某1号楼一层1001');
INSERT INTO `door` VALUES (3, 1002, '某某1号楼一层1002');
INSERT INTO `door` VALUES (4, 1003, '某某1号楼一层1003');
INSERT INTO `door` VALUES (5, 1004, '某某1号楼一层1004');
INSERT INTO `door` VALUES (6, 1005, '某某1号楼一层1005');
INSERT INTO `door` VALUES (7, 1006, '某某1号楼一层1006');
INSERT INTO `door` VALUES (8, 1007, '某某1号楼一层1007');
INSERT INTO `door` VALUES (9, 1008, '某某1号楼一层1008');
INSERT INTO `door` VALUES (10, 1009, '某某1号楼一层1009');
INSERT INTO `door` VALUES (11, 1010, '某某2号楼一层1010');
INSERT INTO `door` VALUES (12, 1011, '某某2号楼一层1011');
INSERT INTO `door` VALUES (13, 1012, '某某2号楼一层1012');
INSERT INTO `door` VALUES (14, 1013, '某某2号楼一层1013');
INSERT INTO `door` VALUES (15, 1014, '某某2号楼一层1014');
INSERT INTO `door` VALUES (16, 1015, '某某2号楼一层1015');
INSERT INTO `door` VALUES (17, 1016, '某某2号楼一层1016');
INSERT INTO `door` VALUES (18, 1017, '某某2号楼一层1017');
INSERT INTO `door` VALUES (19, 1018, '某某2号楼一层1018');
INSERT INTO `door` VALUES (20, 1019, '某某2号楼一层1019');

-- ----------------------------
-- Table structure for keshi
-- ----------------------------
DROP TABLE IF EXISTS `keshi`;
CREATE TABLE `keshi`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '科室id',
  `ksnum` int(11) NOT NULL COMMENT '科室编号',
  `telephone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '科室电话',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '科室名称',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '科室地址',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `ksnum`(`ksnum`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of keshi
-- ----------------------------
INSERT INTO `keshi` VALUES (1, 1, '02911111110', '心内科', '急诊部1号楼一层1000');
INSERT INTO `keshi` VALUES (2, 2, '02911111111', '口腔科', '急诊部1号楼一层1001');
INSERT INTO `keshi` VALUES (3, 3, '02911111112', '血液科', '急诊部1号楼一层1002');
INSERT INTO `keshi` VALUES (4, 4, '02911111113', '消化科', '急诊部1号楼一层1003');
INSERT INTO `keshi` VALUES (5, 5, '02911111114', '骨科', '急诊部1号楼一层1004');
INSERT INTO `keshi` VALUES (6, 6, '02911111115', '儿科', '急诊部1号楼一层1005');
INSERT INTO `keshi` VALUES (7, 7, '02911111116', '皮肤科', '急诊部1号楼一层1006');
INSERT INTO `keshi` VALUES (8, 8, '02911111117', '风湿免疫科', '急诊部1号楼一层1007');
INSERT INTO `keshi` VALUES (9, 9, '02911111118', '妇科', '急诊部1号楼一层1008');
INSERT INTO `keshi` VALUES (10, 10, '02911111119', '心外科', '急诊部1号楼一层1009');

-- ----------------------------
-- Table structure for patient
-- ----------------------------
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
  CONSTRAINT `医生id` FOREIGN KEY (`doctorid`) REFERENCES `doctor` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `病房id` FOREIGN KEY (`doorid`) REFERENCES `door` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of patient
-- ----------------------------
INSERT INTO `patient` VALUES (1, '77701', '患者1', '男', 40, '2015-01-01 00:00:00', '2015-02-01 00:00:00', 1, 1);
INSERT INTO `patient` VALUES (2, '77702', '患者2', '女', 33, '2015-01-01 00:00:00', '2015-02-01 00:00:00', 1, 1);
INSERT INTO `patient` VALUES (3, '77703', '患者3', '男', 40, '2015-01-01 00:00:00', '2015-02-01 00:00:00', 3, 3);
INSERT INTO `patient` VALUES (4, '77704', '患者4', '女', 33, '2015-01-01 00:00:00', '2015-02-01 00:00:00', 1, 1);
INSERT INTO `patient` VALUES (5, '77705', '患者5', '男', 40, '2015-01-01 00:00:00', '2015-02-01 00:00:00', 5, 5);
INSERT INTO `patient` VALUES (6, '77706', '患者6', '女', 33, '2015-01-01 00:00:00', '2015-02-01 00:00:00', 1, 1);
INSERT INTO `patient` VALUES (7, '77707', '患者7', '男', 40, '2015-01-01 00:00:00', '2015-02-01 00:00:00', 7, 7);
INSERT INTO `patient` VALUES (8, '77708', '患者8', '女', 33, '2015-01-01 00:00:00', '2015-02-01 00:00:00', 1, 1);
INSERT INTO `patient` VALUES (9, '77709', '患者9', '男', 40, '2015-01-01 00:00:00', '2015-02-01 00:00:00', 9, 9);
INSERT INTO `patient` VALUES (10, '77710', '患者10', '女', 33, '2015-01-01 00:00:00', '2015-02-01 00:00:00', 1, 1);

SET FOREIGN_KEY_CHECKS = 1;
