"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneFishInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class SceneFishInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("com.midnights.game.SceneFishInfo", [
            { no: 1, name: "fish_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "fish_pool_entity_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "fish_pool_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 4, name: "fish_pool_gadget_id", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "last_shock_time", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ }
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
                case /* optional uint32 fish_id */ 1:
                    message.fishId = reader.uint32();
                    break;
                case /* optional uint32 fish_pool_entity_id */ 2:
                    message.fishPoolEntityId = reader.uint32();
                    break;
                case /* optional com.midnights.game.Vector fish_pool_pos */ 3:
                    message.fishPoolPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.fishPoolPos);
                    break;
                case /* optional uint32 fish_pool_gadget_id */ 4:
                    message.fishPoolGadgetId = reader.uint32();
                    break;
                case /* optional uint32 last_shock_time */ 5:
                    message.lastShockTime = reader.uint32();
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
        /* optional uint32 fish_id = 1; */
        if (message.fishId !== undefined)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.fishId);
        /* optional uint32 fish_pool_entity_id = 2; */
        if (message.fishPoolEntityId !== undefined)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.fishPoolEntityId);
        /* optional com.midnights.game.Vector fish_pool_pos = 3; */
        if (message.fishPoolPos)
            Vector_1.Vector.internalBinaryWrite(message.fishPoolPos, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* optional uint32 fish_pool_gadget_id = 4; */
        if (message.fishPoolGadgetId !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.fishPoolGadgetId);
        /* optional uint32 last_shock_time = 5; */
        if (message.lastShockTime !== undefined)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.lastShockTime);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message com.midnights.game.SceneFishInfo
 */
exports.SceneFishInfo = new SceneFishInfo$Type();
