"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityJumpNotify = exports.EntityJumpNotify_Type = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
/**
 * @generated from protobuf enum EntityJumpNotify.Type
 */
var EntityJumpNotify_Type;
(function (EntityJumpNotify_Type) {
    /**
     * @generated from protobuf enum value: TYPE_NULL = 0;
     */
    EntityJumpNotify_Type[EntityJumpNotify_Type["NULL"] = 0] = "NULL";
    /**
     * @generated from protobuf enum value: TYPE_ACTIVE = 1;
     */
    EntityJumpNotify_Type[EntityJumpNotify_Type["ACTIVE"] = 1] = "ACTIVE";
    /**
     * @generated from protobuf enum value: TYPE_PASSIVE = 2;
     */
    EntityJumpNotify_Type[EntityJumpNotify_Type["PASSIVE"] = 2] = "PASSIVE";
})(EntityJumpNotify_Type = exports.EntityJumpNotify_Type || (exports.EntityJumpNotify_Type = {}));
// @generated message type with reflection information, may provide speed optimized methods
class EntityJumpNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EntityJumpNotify", [
            { no: 6, name: "pos", kind: "message", T: () => Vector_1.Vector },
            { no: 2, name: "jump_type", kind: "enum", T: () => ["EntityJumpNotify.Type", EntityJumpNotify_Type, "TYPE_"] },
            { no: 4, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "rot", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { jumpType: 0, entityId: 0 };
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
                case /* Vector pos */ 6:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
                    break;
                case /* EntityJumpNotify.Type jump_type */ 2:
                    message.jumpType = reader.int32();
                    break;
                case /* uint32 entity_id */ 4:
                    message.entityId = reader.uint32();
                    break;
                case /* Vector rot */ 9:
                    message.rot = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.rot);
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
        /* Vector pos = 6; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* EntityJumpNotify.Type jump_type = 2; */
        if (message.jumpType !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.jumpType);
        /* uint32 entity_id = 4; */
        if (message.entityId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.entityId);
        /* Vector rot = 9; */
        if (message.rot)
            Vector_1.Vector.internalBinaryWrite(message.rot, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityJumpNotify
 */
exports.EntityJumpNotify = new EntityJumpNotify$Type();
