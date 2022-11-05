"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityDungeonAvatar = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ActivityDungeonAvatar$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.ActivityDungeonAvatar", [
            { no: 1, name: "avatar_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "is_trial", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "costume_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* optional uint32 avatar_id */ 1:
                    message.avatarId = reader.uint32();
                    break;
                case /* optional bool is_trial */ 2:
                    message.isTrial = reader.bool();
                    break;
                case /* optional uint32 costume_id */ 3:
                    message.costumeId = reader.uint32();
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
        /* optional uint32 avatar_id = 1; */
        if (message.avatarId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.avatarId);
        /* optional bool is_trial = 2; */
        if (message.isTrial !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.isTrial);
        /* optional uint32 costume_id = 3; */
        if (message.costumeId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.costumeId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.ActivityDungeonAvatar
 */
exports.ActivityDungeonAvatar = new ActivityDungeonAvatar$Type();
