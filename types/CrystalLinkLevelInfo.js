"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrystalLinkLevelInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const CrystalLinkTeamInfo_1 = require("./CrystalLinkTeamInfo");
// @generated message type with reflection information, may provide speed optimized methods
class CrystalLinkLevelInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("CrystalLinkLevelInfo", [
            { no: 4, name: "is_open", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "team_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CrystalLinkTeamInfo_1.CrystalLinkTeamInfo },
            { no: 14, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "best_score", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isOpen: false, teamInfoList: [], levelId: 0, bestScore: 0 };
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
                case /* bool is_open */ 4:
                    message.isOpen = reader.bool();
                    break;
                case /* repeated CrystalLinkTeamInfo team_info_list */ 3:
                    message.teamInfoList.push(CrystalLinkTeamInfo_1.CrystalLinkTeamInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 level_id */ 14:
                    message.levelId = reader.uint32();
                    break;
                case /* uint32 best_score */ 7:
                    message.bestScore = reader.uint32();
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
        /* bool is_open = 4; */
        if (message.isOpen !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isOpen);
        /* repeated CrystalLinkTeamInfo team_info_list = 3; */
        for (let i = 0; i < message.teamInfoList.length; i++)
            CrystalLinkTeamInfo_1.CrystalLinkTeamInfo.internalBinaryWrite(message.teamInfoList[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 level_id = 14; */
        if (message.levelId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.levelId);
        /* uint32 best_score = 7; */
        if (message.bestScore !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.bestScore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CrystalLinkLevelInfo
 */
exports.CrystalLinkLevelInfo = new CrystalLinkLevelInfo$Type();
