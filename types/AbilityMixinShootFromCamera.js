"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityMixinShootFromCamera = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityMixinShootFromCamera$Type extends runtime_5.MessageType {
    constructor() {
        super("AbilityMixinShootFromCamera", [
            { no: 13, name: "forward", kind: "message", T: () => Vector_1.Vector },
            { no: 9, name: "init_pos", kind: "message", T: () => Vector_1.Vector }
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
                case /* Vector forward */ 13:
                    message.forward = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.forward);
                    break;
                case /* Vector init_pos */ 9:
                    message.initPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.initPos);
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
        /* Vector forward = 13; */
        if (message.forward)
            Vector_1.Vector.internalBinaryWrite(message.forward, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* Vector init_pos = 9; */
        if (message.initPos)
            Vector_1.Vector.internalBinaryWrite(message.initPos, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AbilityMixinShootFromCamera
 */
exports.AbilityMixinShootFromCamera = new AbilityMixinShootFromCamera$Type();
