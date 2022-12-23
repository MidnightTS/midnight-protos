"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AranaraCollectionSuite = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AranaraCollectionState_1 = require("./AranaraCollectionState");
// @generated message type with reflection information, may provide speed optimized methods
class AranaraCollectionSuite$Type extends runtime_5.MessageType {
    constructor() {
        super("AranaraCollectionSuite", [
            { no: 5, name: "collection_id_state_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "enum", T: () => ["AranaraCollectionState", AranaraCollectionState_1.AranaraCollectionState, "ARANARA_COLLECTION_STATE_"] } },
            { no: 12, name: "collection_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { collectionIdStateMap: {}, collectionType: 0 };
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
                case /* map<uint32, AranaraCollectionState> collection_id_state_map */ 5:
                    this.binaryReadMap5(message.collectionIdStateMap, reader, options);
                    break;
                case /* uint32 collection_type */ 12:
                    message.collectionType = reader.uint32();
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
    binaryReadMap5(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field AranaraCollectionSuite.collection_id_state_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, AranaraCollectionState> collection_id_state_map = 5; */
        for (let k of Object.keys(message.collectionIdStateMap))
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int32(message.collectionIdStateMap[k]).join();
        /* uint32 collection_type = 12; */
        if (message.collectionType !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.collectionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AranaraCollectionSuite
 */
exports.AranaraCollectionSuite = new AranaraCollectionSuite$Type();
