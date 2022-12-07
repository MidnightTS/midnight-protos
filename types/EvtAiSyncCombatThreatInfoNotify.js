"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvtAiSyncCombatThreatInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const AiThreatInfo_1 = require("./AiThreatInfo");
// @generated message type with reflection information, may provide speed optimized methods
class EvtAiSyncCombatThreatInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("EvtAiSyncCombatThreatInfoNotify", [
            { no: 11, name: "combat_threat_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => AiThreatInfo_1.AiThreatInfo } }
        ]);
    }
    create(value) {
        const message = { combatThreatInfoMap: {} };
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
                case /* map<uint32, AiThreatInfo> combat_threat_info_map */ 11:
                    this.binaryReadMap11(message.combatThreatInfoMap, reader, options);
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
    binaryReadMap11(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = AiThreatInfo_1.AiThreatInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field EvtAiSyncCombatThreatInfoNotify.combat_threat_info_map");
            }
        }
        map[key ?? 0] = val ?? AiThreatInfo_1.AiThreatInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, AiThreatInfo> combat_threat_info_map = 11; */
        for (let k of Object.keys(message.combatThreatInfoMap)) {
            writer.tag(11, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            AiThreatInfo_1.AiThreatInfo.internalBinaryWrite(message.combatThreatInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message EvtAiSyncCombatThreatInfoNotify
 */
exports.EvtAiSyncCombatThreatInfoNotify = new EvtAiSyncCombatThreatInfoNotify$Type();
