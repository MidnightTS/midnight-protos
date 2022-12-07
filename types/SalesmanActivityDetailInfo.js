"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesmanActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SalesmanStatusType_1 = require("./SalesmanStatusType");
// @generated message type with reflection information, may provide speed optimized methods
class SalesmanActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("SalesmanActivityDetailInfo", [
            { no: 5, name: "status", kind: "enum", T: () => ["SalesmanStatusType", SalesmanStatusType_1.SalesmanStatusType, "SALESMAN_STATUS_TYPE_"] },
            { no: 12, name: "selected_reward_id_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 7, name: "Unk3300_DIJFOCBGIAM", kind: "scalar", jsonName: "Unk3300DIJFOCBGIAM", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "Unk3300_DJFCEFKGKPI", kind: "scalar", jsonName: "Unk3300DJFCEFKGKPI", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "day_index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_LPABHMOPFCE", kind: "scalar", jsonName: "Unk3300LPABHMOPFCE", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "Unk3300_KNJCBGFKLFD", kind: "scalar", jsonName: "Unk3300KNJCBGFKLFD", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_FOFFAEEBBNP", kind: "scalar", jsonName: "Unk3300FOFFAEEBBNP", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "Unk3300_JNALBACFNFN", kind: "scalar", jsonName: "Unk3300JNALBACFNFN", T: 8 /*ScalarType.BOOL*/ },
            { no: 11, name: "day_reward_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { status: 0, selectedRewardIdMap: {}, unk3300DIJFOCBGIAM: 0, unk3300DJFCEFKGKPI: false, dayIndex: 0, unk3300LPABHMOPFCE: 0, unk3300KNJCBGFKLFD: 0, unk3300FOFFAEEBBNP: 0, unk3300JNALBACFNFN: false, dayRewardId: 0 };
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
                case /* SalesmanStatusType status */ 5:
                    message.status = reader.int32();
                    break;
                case /* map<uint32, uint32> selected_reward_id_map */ 12:
                    this.binaryReadMap12(message.selectedRewardIdMap, reader, options);
                    break;
                case /* uint32 Unk3300_DIJFOCBGIAM = 7 [json_name = "Unk3300DIJFOCBGIAM"];*/ 7:
                    message.unk3300DIJFOCBGIAM = reader.uint32();
                    break;
                case /* bool Unk3300_DJFCEFKGKPI = 2 [json_name = "Unk3300DJFCEFKGKPI"];*/ 2:
                    message.unk3300DJFCEFKGKPI = reader.bool();
                    break;
                case /* uint32 day_index */ 9:
                    message.dayIndex = reader.uint32();
                    break;
                case /* uint32 Unk3300_LPABHMOPFCE = 6 [json_name = "Unk3300LPABHMOPFCE"];*/ 6:
                    message.unk3300LPABHMOPFCE = reader.uint32();
                    break;
                case /* uint32 Unk3300_KNJCBGFKLFD = 10 [json_name = "Unk3300KNJCBGFKLFD"];*/ 10:
                    message.unk3300KNJCBGFKLFD = reader.uint32();
                    break;
                case /* uint32 Unk3300_FOFFAEEBBNP = 3 [json_name = "Unk3300FOFFAEEBBNP"];*/ 3:
                    message.unk3300FOFFAEEBBNP = reader.uint32();
                    break;
                case /* bool Unk3300_JNALBACFNFN = 14 [json_name = "Unk3300JNALBACFNFN"];*/ 14:
                    message.unk3300JNALBACFNFN = reader.bool();
                    break;
                case /* uint32 day_reward_id */ 11:
                    message.dayRewardId = reader.uint32();
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
                default: throw new globalThis.Error("unknown map entry field for field SalesmanActivityDetailInfo.selected_reward_id_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* SalesmanStatusType status = 5; */
        if (message.status !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.status);
        /* map<uint32, uint32> selected_reward_id_map = 12; */
        for (let k of Object.keys(message.selectedRewardIdMap))
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.selectedRewardIdMap[k]).join();
        /* uint32 Unk3300_DIJFOCBGIAM = 7 [json_name = "Unk3300DIJFOCBGIAM"]; */
        if (message.unk3300DIJFOCBGIAM !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.unk3300DIJFOCBGIAM);
        /* bool Unk3300_DJFCEFKGKPI = 2 [json_name = "Unk3300DJFCEFKGKPI"]; */
        if (message.unk3300DJFCEFKGKPI !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.unk3300DJFCEFKGKPI);
        /* uint32 day_index = 9; */
        if (message.dayIndex !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.dayIndex);
        /* uint32 Unk3300_LPABHMOPFCE = 6 [json_name = "Unk3300LPABHMOPFCE"]; */
        if (message.unk3300LPABHMOPFCE !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300LPABHMOPFCE);
        /* uint32 Unk3300_KNJCBGFKLFD = 10 [json_name = "Unk3300KNJCBGFKLFD"]; */
        if (message.unk3300KNJCBGFKLFD !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.unk3300KNJCBGFKLFD);
        /* uint32 Unk3300_FOFFAEEBBNP = 3 [json_name = "Unk3300FOFFAEEBBNP"]; */
        if (message.unk3300FOFFAEEBBNP !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.unk3300FOFFAEEBBNP);
        /* bool Unk3300_JNALBACFNFN = 14 [json_name = "Unk3300JNALBACFNFN"]; */
        if (message.unk3300JNALBACFNFN !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.unk3300JNALBACFNFN);
        /* uint32 day_reward_id = 11; */
        if (message.dayRewardId !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.dayRewardId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SalesmanActivityDetailInfo
 */
exports.SalesmanActivityDetailInfo = new SalesmanActivityDetailInfo$Type();
