"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeAvatarReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class ChangeAvatarReq$Type extends runtime_5.MessageType {
    constructor() {
        super("ChangeAvatarReq", [
            { no: 9, name: "move_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 14, name: "guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 11, name: "is_move", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "skill_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { guid: 0n, isMove: false, skillId: 0 };
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
                case /* Vector move_pos */ 9:
                    message.movePos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.movePos);
                    break;
                case /* uint64 guid */ 14:
                    message.guid = reader.uint64().toBigInt();
                    break;
                case /* bool is_move */ 11:
                    message.isMove = reader.bool();
                    break;
                case /* uint32 skill_id */ 4:
                    message.skillId = reader.uint32();
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
        /* Vector move_pos = 9; */
        if (message.movePos)
            Vector_1.Vector.internalBinaryWrite(message.movePos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 guid = 14; */
        if (message.guid !== 0n)
            writer.tag(14, runtime_1.WireType.Varint).uint64(message.guid);
        /* bool is_move = 11; */
        if (message.isMove !== false)
            writer.tag(11, runtime_1.WireType.Varint).bool(message.isMove);
        /* uint32 skill_id = 4; */
        if (message.skillId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.skillId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ChangeAvatarReq
 */
exports.ChangeAvatarReq = new ChangeAvatarReq$Type();
