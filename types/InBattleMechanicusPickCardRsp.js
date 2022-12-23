"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusPickCardRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusPickCardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleMechanicusPickCardRsp", [
            { no: 4, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "play_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, groupId: 0, playIndex: 0, cardId: 0 };
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
                case /* int32 retcode */ 4:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 group_id */ 14:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 play_index */ 10:
                    message.playIndex = reader.uint32();
                    break;
                case /* uint32 card_id */ 3:
                    message.cardId = reader.uint32();
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
        /* int32 retcode = 4; */
        if (message.retcode !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 group_id = 14; */
        if (message.groupId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 play_index = 10; */
        if (message.playIndex !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.playIndex);
        /* uint32 card_id = 3; */
        if (message.cardId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.cardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusPickCardRsp
 */
exports.InBattleMechanicusPickCardRsp = new InBattleMechanicusPickCardRsp$Type();
