"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SumoAvatarInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SumoAvatarInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SumoAvatarInfo", [
            { no: 9, name: "is_trial", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "avatar_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { isTrial: false, avatarId: 0n };
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
                case /* bool is_trial */ 9:
                    message.isTrial = reader.bool();
                    break;
                case /* uint64 avatar_id */ 13:
                    message.avatarId = reader.uint64().toBigInt();
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
        /* bool is_trial = 9; */
        if (message.isTrial !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isTrial);
        /* uint64 avatar_id = 13; */
        if (message.avatarId !== 0n)
            writer.tag(13, runtime_1.WireType.Varint).uint64(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SumoAvatarInfo
 */
exports.SumoAvatarInfo = new SumoAvatarInfo$Type();
