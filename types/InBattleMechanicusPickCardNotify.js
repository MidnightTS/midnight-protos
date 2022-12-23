"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InBattleMechanicusPickCardNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class InBattleMechanicusPickCardNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("InBattleMechanicusPickCardNotify", [
            { no: 1, name: "player_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "card_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "play_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { playerUid: 0, cardId: 0, groupId: 0, playIndex: 0 };
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
                case /* uint32 player_uid */ 1:
                    message.playerUid = reader.uint32();
                    break;
                case /* uint32 card_id */ 11:
                    message.cardId = reader.uint32();
                    break;
                case /* uint32 group_id */ 12:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 play_index */ 4:
                    message.playIndex = reader.uint32();
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
        /* uint32 player_uid = 1; */
        if (message.playerUid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.playerUid);
        /* uint32 card_id = 11; */
        if (message.cardId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.cardId);
        /* uint32 group_id = 12; */
        if (message.groupId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 play_index = 4; */
        if (message.playIndex !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.playIndex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message InBattleMechanicusPickCardNotify
 */
exports.InBattleMechanicusPickCardNotify = new InBattleMechanicusPickCardNotify$Type();
