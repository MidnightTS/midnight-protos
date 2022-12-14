"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeNpcData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class HomeNpcData$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeNpcData", [
            { no: 11, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "spawn_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "costume_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "spawn_rot", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { avatarId: 0, costumeId: 0 };
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
                case /* uint32 avatar_id */ 11:
                    message.avatarId = reader.uint32();
                    break;
                case /* Vector spawn_pos */ 13:
                    message.spawnPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnPos);
                    break;
                case /* uint32 costume_id */ 4:
                    message.costumeId = reader.uint32();
                    break;
                case /* Vector spawn_rot */ 7:
                    message.spawnRot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.spawnRot);
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
        /* uint32 avatar_id = 11; */
        if (message.avatarId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* Vector spawn_pos = 13; */
        if (message.spawnPos)
            Vector_1.Vector.internalBinaryWrite(message.spawnPos, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 costume_id = 4; */
        if (message.costumeId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.costumeId);
        /* Vector spawn_rot = 7; */
        if (message.spawnRot)
            Vector_1.Vector.internalBinaryWrite(message.spawnRot, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeNpcData
 */
exports.HomeNpcData = new HomeNpcData$Type();
