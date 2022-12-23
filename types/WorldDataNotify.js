"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldDataNotify = exports.WorldDataNotify_DataType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PropValue_1 = require("./PropValue");
/**
 * @generated from protobuf enum WorldDataNotify.DataType
 */
var WorldDataNotify_DataType;
(function (WorldDataNotify_DataType) {
    /**
     * @generated from protobuf enum value: DATA_TYPE_NONE = 0;
     */
    WorldDataNotify_DataType[WorldDataNotify_DataType["NONE"] = 0] = "NONE";
    /**
     * @generated from protobuf enum value: DATA_TYPE_WORLD_LEVEL = 1;
     */
    WorldDataNotify_DataType[WorldDataNotify_DataType["WORLD_LEVEL"] = 1] = "WORLD_LEVEL";
    /**
     * @generated from protobuf enum value: DATA_TYPE_IS_IN_MP_MODE = 2;
     */
    WorldDataNotify_DataType[WorldDataNotify_DataType["IS_IN_MP_MODE"] = 2] = "IS_IN_MP_MODE";
})(WorldDataNotify_DataType = exports.WorldDataNotify_DataType || (exports.WorldDataNotify_DataType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class WorldDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("WorldDataNotify", [
            { no: 6, name: "world_prop_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => PropValue_1.PropValue } }
        ]);
    }
    create(value) {
        const message = { worldPropMap: {} };
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
                case /* map<uint32, PropValue> world_prop_map */ 6:
                    this.binaryReadMap6(message.worldPropMap, reader, options);
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
    binaryReadMap6(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field WorldDataNotify.world_prop_map");
            }
        }
        map[key ?? 0] = val ?? PropValue_1.PropValue.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, PropValue> world_prop_map = 6; */
        for (let k of Object.keys(message.worldPropMap)) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            PropValue_1.PropValue.internalBinaryWrite(message.worldPropMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message WorldDataNotify
 */
exports.WorldDataNotify = new WorldDataNotify$Type();
