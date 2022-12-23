"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChessEntranceInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const ChessMonsterInfo_1 = require("./ChessMonsterInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ChessEntranceInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("ChessEntranceInfo", [
            { no: 15, name: "monster_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChessMonsterInfo_1.ChessMonsterInfo },
            { no: 9, name: "entrance_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "entrance_point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { monsterInfoList: [], entranceIndex: 0, entrancePointId: 0 };
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
                case /* repeated ChessMonsterInfo monster_info_list */ 15:
                    message.monsterInfoList.push(ChessMonsterInfo_1.ChessMonsterInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 entrance_index */ 9:
                    message.entranceIndex = reader.uint32();
                    break;
                case /* uint32 entrance_point_id */ 12:
                    message.entrancePointId = reader.uint32();
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
        /* repeated ChessMonsterInfo monster_info_list = 15; */
        for (let i = 0; i < message.monsterInfoList.length; i++)
            ChessMonsterInfo_1.ChessMonsterInfo.internalBinaryWrite(message.monsterInfoList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entrance_index = 9; */
        if (message.entranceIndex !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.entranceIndex);
        /* uint32 entrance_point_id = 12; */
        if (message.entrancePointId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.entrancePointId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChessEntranceInfo
 */
exports.ChessEntranceInfo = new ChessEntranceInfo$Type();
