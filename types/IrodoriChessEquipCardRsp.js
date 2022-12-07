"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IrodoriChessEquipCardRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class IrodoriChessEquipCardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("IrodoriChessEquipCardRsp", [
            { no: 9, name: "card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "is_hard_map", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { cardId: 0, levelId: 0, isHardMap: false, retcode: 0 };
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
                case /* uint32 card_id */ 9:
                    message.cardId = reader.uint32();
                    break;
                case /* uint32 level_id */ 2:
                    message.levelId = reader.uint32();
                    break;
                case /* bool is_hard_map */ 8:
                    message.isHardMap = reader.bool();
                    break;
                case /* int32 retcode */ 1:
                    message.retcode = reader.int32();
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
        /* uint32 card_id = 9; */
        if (message.cardId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.cardId);
        /* uint32 level_id = 2; */
        if (message.levelId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.levelId);
        /* bool is_hard_map = 8; */
        if (message.isHardMap !== false)
            writer.tag(8, runtime_1.WireType.Varint).bool(message.isHardMap);
        /* int32 retcode = 1; */
        if (message.retcode !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message IrodoriChessEquipCardRsp
 */
exports.IrodoriChessEquipCardRsp = new IrodoriChessEquipCardRsp$Type();
