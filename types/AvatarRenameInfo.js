"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarRenameInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarRenameInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarRenameInfo", [
            { no: 3, name: "avatar_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "avatar_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { avatarName: "", avatarId: 0 };
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
                case /* string avatar_name */ 3:
                    message.avatarName = reader.string();
                    break;
                case /* uint32 avatar_id */ 7:
                    message.avatarId = reader.uint32();
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
        /* string avatar_name = 3; */
        if (message.avatarName !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.avatarName);
        /* uint32 avatar_id = 7; */
        if (message.avatarId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.avatarId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarRenameInfo
 */
exports.AvatarRenameInfo = new AvatarRenameInfo$Type();
