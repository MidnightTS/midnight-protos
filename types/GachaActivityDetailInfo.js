"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GachaActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GachaStageData_1 = require("./GachaStageData");
// @generated message type with reflection information, may provide speed optimized methods
class GachaActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GachaActivityDetailInfo", [
            { no: 12, name: "Unk3300_JJDHKJGDEKJ", kind: "scalar", jsonName: "Unk3300JJDHKJGDEKJ", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "robot_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 3, name: "have_reward_robot_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 14, name: "have_get_robot_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "gacha_stage_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GachaStageData_1.GachaStageData },
            { no: 15, name: "Unk3300_IGGPBEOCNGI", kind: "scalar", jsonName: "Unk3300IGGPBEOCNGI", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { unk3300JJDHKJGDEKJ: 0, robotNumMap: {}, haveRewardRobotNumMap: {}, haveGetRobotList: [], gachaStageDataList: [], unk3300IGGPBEOCNGI: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 Unk3300_JJDHKJGDEKJ = 12 [json_name = "Unk3300JJDHKJGDEKJ"];*/ 12:
                    message.unk3300JJDHKJGDEKJ = reader.uint32();
                    break;
                case /* map<uint32, uint32> robot_num_map */ 10:
                    this.binaryReadMap10(message.robotNumMap, reader, options);
                    break;
                case /* map<uint32, uint32> have_reward_robot_num_map */ 3:
                    this.binaryReadMap3(message.haveRewardRobotNumMap, reader, options);
                    break;
                case /* repeated uint32 have_get_robot_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.haveGetRobotList.push(reader.uint32());
                    else
                        message.haveGetRobotList.push(reader.uint32());
                    break;
                case /* repeated GachaStageData gacha_stage_data_list */ 7:
                    message.gachaStageDataList.push(GachaStageData_1.GachaStageData.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 Unk3300_IGGPBEOCNGI = 15 [json_name = "Unk3300IGGPBEOCNGI"];*/ 15:
                    message.unk3300IGGPBEOCNGI = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap10(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GachaActivityDetailInfo.robot_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap3(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GachaActivityDetailInfo.have_reward_robot_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 Unk3300_JJDHKJGDEKJ = 12 [json_name = "Unk3300JJDHKJGDEKJ"]; */
        if (message.unk3300JJDHKJGDEKJ !== 0)
            writer.tag(12, runtime_2.WireType.Varint).uint32(message.unk3300JJDHKJGDEKJ);
        /* map<uint32, uint32> robot_num_map = 10; */
        for (let k of Object.keys(message.robotNumMap))
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.robotNumMap[k]).join();
        /* map<uint32, uint32> have_reward_robot_num_map = 3; */
        for (let k of Object.keys(message.haveRewardRobotNumMap))
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.haveRewardRobotNumMap[k]).join();
        /* repeated uint32 have_get_robot_list = 14; */
        if (message.haveGetRobotList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.haveGetRobotList.length; i++)
                writer.uint32(message.haveGetRobotList[i]);
            writer.join();
        }
        /* repeated GachaStageData gacha_stage_data_list = 7; */
        for (let i = 0; i < message.gachaStageDataList.length; i++)
            GachaStageData_1.GachaStageData.internalBinaryWrite(message.gachaStageDataList[i], writer.tag(7, runtime_2.WireType.LengthDelimited).fork(), options).join();
        /* uint32 Unk3300_IGGPBEOCNGI = 15 [json_name = "Unk3300IGGPBEOCNGI"]; */
        if (message.unk3300IGGPBEOCNGI !== 0)
            writer.tag(15, runtime_2.WireType.Varint).uint32(message.unk3300IGGPBEOCNGI);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GachaActivityDetailInfo
 */
exports.GachaActivityDetailInfo = new GachaActivityDetailInfo$Type();
