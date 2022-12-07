"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityPropNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PropValue_1 = require("./PropValue");
// @generated message type with reflection information, may provide speed optimized methods
class EntityPropNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EntityPropNotify", [
            { no: 13, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => PropValue_1.PropValue } }
        ]);
    }
    create(value) {
        const message = { entityId: 0, propMap: {} };
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
                case /* uint32 entity_id */ 13:
                    message.entityId = reader.uint32();
                    break;
                case /* map<uint32, PropValue> prop_map */ 9:
                    this.binaryReadMap9(message.propMap, reader, options);
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
    binaryReadMap9(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = PropValue_1.PropValue.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field EntityPropNotify.prop_map");
            }
        }
        map[key ?? 0] = val ?? PropValue_1.PropValue.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 entity_id = 13; */
        if (message.entityId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.entityId);
        /* map<uint32, PropValue> prop_map = 9; */
        for (let k of Object.keys(message.propMap)) {
            writer.tag(9, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            PropValue_1.PropValue.internalBinaryWrite(message.propMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EntityPropNotify
 */
exports.EntityPropNotify = new EntityPropNotify$Type();
