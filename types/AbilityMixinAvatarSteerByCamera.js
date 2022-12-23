"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinAvatarSteerByCamera = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinAvatarSteerByCamera$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinAvatarSteerByCamera", [
            { no: 7, name: "target_dir", kind: "message", T: () => Vector_1.Vector },
            { no: 2, name: "target_pos", kind: "message", T: () => Vector_1.Vector }
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
                case /* Vector target_dir */ 7:
                    message.targetDir = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetDir);
                    break;
                case /* Vector target_pos */ 2:
                    message.targetPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.targetPos);
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
        /* Vector target_dir = 7; */
        if (message.targetDir)
            Vector_1.Vector.internalBinaryWrite(message.targetDir, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector target_pos = 2; */
        if (message.targetPos)
            Vector_1.Vector.internalBinaryWrite(message.targetPos, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinAvatarSteerByCamera
 */
exports.AbilityMixinAvatarSteerByCamera = new AbilityMixinAvatarSteerByCamera$Type();
