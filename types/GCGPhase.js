"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGPhase = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGPhaseType_1 = require("./GCGPhaseType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGPhase$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGPhase", [
            { no: 4, name: "phase_type", kind: "enum", T: () => ["GCGPhaseType", GCGPhaseType_1.GCGPhaseType] },
            { no: 12, name: "allow_controller_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { phaseType: 0, allowControllerMap: {} };
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
                case /* GCGPhaseType phase_type */ 4:
                    message.phaseType = reader.int32();
                    break;
                case /* map<uint32, uint32> allow_controller_map */ 12:
                    this.binaryReadMap12(message.allowControllerMap, reader, options);
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
    binaryReadMap12(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GCGPhase.allow_controller_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* GCGPhaseType phase_type = 4; */
        if (message.phaseType !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.phaseType);
        /* map<uint32, uint32> allow_controller_map = 12; */
        for (let k of Object.keys(message.allowControllerMap))
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.allowControllerMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGPhase
 */
exports.GCGPhase = new GCGPhase$Type();
