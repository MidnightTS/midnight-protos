"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityGadgetInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AbilityGadgetInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.AbilityGadgetInfo", [
            { no: 1, name: "camp_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "camp_target_type", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "target_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 camp_id */ 1:
                    message.campId = reader.uint32();
                    break;
                case /* optional uint32 camp_target_type */ 2:
                    message.campTargetType = reader.uint32();
                    break;
                case /* optional uint32 target_entity_id */ 3:
                    message.targetEntityId = reader.uint32();
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
        /* optional uint32 camp_id = 1; */
        if (message.campId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.campId);
        /* optional uint32 camp_target_type = 2; */
        if (message.campTargetType !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.campTargetType);
        /* optional uint32 target_entity_id = 3; */
        if (message.targetEntityId !== undefined)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.targetEntityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.AbilityGadgetInfo
 */
exports.AbilityGadgetInfo = new AbilityGadgetInfo$Type();
