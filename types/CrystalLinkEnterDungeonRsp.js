"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrystalLinkEnterDungeonRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CrystalLinkTeamInfo_1 = require("./CrystalLinkTeamInfo");
// @generated message type with reflection information, may provide speed optimized methods
class CrystalLinkEnterDungeonRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("CrystalLinkEnterDungeonRsp", [
            { no: 5, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "difficulty_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "team_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CrystalLinkTeamInfo_1.CrystalLinkTeamInfo }
        ]);
    }
    create(value) {
        const message = { retcode: 0, difficultyId: 0, levelId: 0, teamInfoList: [] };
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
                case /* int32 retcode */ 5:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 difficulty_id */ 15:
                    message.difficultyId = reader.uint32();
                    break;
                case /* uint32 level_id */ 7:
                    message.levelId = reader.uint32();
                    break;
                case /* repeated CrystalLinkTeamInfo team_info_list */ 12:
                    message.teamInfoList.push(CrystalLinkTeamInfo_1.CrystalLinkTeamInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* int32 retcode = 5; */
        if (message.retcode !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 difficulty_id = 15; */
        if (message.difficultyId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.difficultyId);
        /* uint32 level_id = 7; */
        if (message.levelId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.levelId);
        /* repeated CrystalLinkTeamInfo team_info_list = 12; */
        for (let i = 0; i < message.teamInfoList.length; i++)
            CrystalLinkTeamInfo_1.CrystalLinkTeamInfo.internalBinaryWrite(message.teamInfoList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CrystalLinkEnterDungeonRsp
 */
exports.CrystalLinkEnterDungeonRsp = new CrystalLinkEnterDungeonRsp$Type();
