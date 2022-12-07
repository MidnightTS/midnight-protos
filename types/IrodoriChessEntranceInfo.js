"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriChessEntranceInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const IrodoriChessMonsterInfo_1 = require("./IrodoriChessMonsterInfo");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessEntranceInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriChessEntranceInfo", [
            { no: 11, name: "entrance_point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "monster_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => IrodoriChessMonsterInfo_1.IrodoriChessMonsterInfo }
        ]);
    }
    create(value) {
        const message = { entrancePointId: 0, monsterInfoList: [] };
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
                case /* uint32 entrance_point_id */ 11:
                    message.entrancePointId = reader.uint32();
                    break;
                case /* repeated IrodoriChessMonsterInfo monster_info_list */ 8:
                    message.monsterInfoList.push(IrodoriChessMonsterInfo_1.IrodoriChessMonsterInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 entrance_point_id = 11; */
        if (message.entrancePointId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.entrancePointId);
        /* repeated IrodoriChessMonsterInfo monster_info_list = 8; */
        for (let i = 0; i < message.monsterInfoList.length; i++)
            IrodoriChessMonsterInfo_1.IrodoriChessMonsterInfo.internalBinaryWrite(message.monsterInfoList[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriChessEntranceInfo
 */
exports.IrodoriChessEntranceInfo = new IrodoriChessEntranceInfo$Type();
